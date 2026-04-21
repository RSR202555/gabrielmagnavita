import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
const DEFAULT_BUCKET = 'blog-images'

function sanitizeFilename(filename: string) {
  return filename
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const filename = sanitizeFilename(searchParams.get('filename') ?? 'upload')
    const contentType = request.headers.get('content-type') ?? 'application/octet-stream'
    const arrayBuffer = await request.arrayBuffer()
    const body = Buffer.from(arrayBuffer)

    if (!body.byteLength) {
      return NextResponse.json({ error: 'Empty file' }, { status: 400 })
    }

    const ext = filename.includes('.') ? filename.split('.').pop() : 'png'
    const path = `posts/${Date.now()}-${crypto.randomUUID()}.${ext}`

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return NextResponse.json(
          {
            error:
              'Upload nao configurado. Defina SUPABASE_SERVICE_ROLE_KEY ou BLOB_READ_WRITE_TOKEN.',
          },
          { status: 500 }
        )
      }

      const blob = await put(path, body, {
        access: 'public',
        contentType,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      })

      return NextResponse.json({ url: blob.url })
    }

    const supabaseBucket = process.env.SUPABASE_STORAGE_BUCKET || DEFAULT_BUCKET
    const storage = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ).storage

    const { error: uploadError } = await storage
      .from(supabaseBucket)
      .upload(path, body, { contentType, upsert: false })

    if (uploadError) {
      return NextResponse.json(
        {
          error: `Supabase Storage (${supabaseBucket}): ${uploadError.message}`,
        },
        { status: 500 }
      )
    }

    const { data } = storage.from(supabaseBucket).getPublicUrl(path)

    return NextResponse.json({ url: data.publicUrl })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
