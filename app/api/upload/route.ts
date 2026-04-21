import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request): Promise<NextResponse> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename')

  if (!filename || !request.body) {
    return NextResponse.json({ error: 'Missing filename or body' }, { status: 400 })
  }

  const blob = await put(`posts/${Date.now()}-${filename}`, request.body, {
    access: 'public',
  })

  return NextResponse.json(blob)
}
