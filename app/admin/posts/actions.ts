'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  const supabase = await createClient()

  const published = formData.get('published') === 'true'

  const { error } = await supabase.from('posts').insert({
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    content: formData.get('content') as string,
    excerpt: (formData.get('excerpt') as string) || null,
    cover_image: (formData.get('cover_image') as string) || null,
    category: (formData.get('category') as string) || null,
    tags: (formData.get('tags') as string)
      ? (formData.get('tags') as string).split(',').map((t) => t.trim()).filter(Boolean)
      : [],
    published,
    published_at: published ? new Date().toISOString() : null,
  })

  if (error) return { error: error.message }

  revalidatePath('/blog')
  revalidatePath('/admin/posts')
  redirect('/admin/posts')
}

export async function updatePost(id: string, formData: FormData) {
  const supabase = await createClient()

  const published = formData.get('published') === 'true'

  const { data: existing } = await supabase
    .from('posts')
    .select('published, published_at')
    .eq('id', id)
    .single()

  const { error } = await supabase
    .from('posts')
    .update({
      title: formData.get('title') as string,
      slug: formData.get('slug') as string,
      content: formData.get('content') as string,
      excerpt: (formData.get('excerpt') as string) || null,
      cover_image: (formData.get('cover_image') as string) || null,
      category: (formData.get('category') as string) || null,
      tags: (formData.get('tags') as string)
        ? (formData.get('tags') as string).split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      published,
      published_at:
        published && !existing?.published_at
          ? new Date().toISOString()
          : existing?.published_at ?? null,
    })
    .eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/blog')
  revalidatePath(`/blog/${formData.get('slug')}`)
  revalidatePath('/admin/posts')
  redirect('/admin/posts')
}

export async function deletePost(id: string) {
  const supabase = await createClient()
  await supabase.from('posts').delete().eq('id', id)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function togglePublish(id: string, currentlyPublished: boolean) {
  const supabase = await createClient()
  await supabase
    .from('posts')
    .update({
      published: !currentlyPublished,
      published_at: !currentlyPublished ? new Date().toISOString() : null,
    })
    .eq('id', id)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}
