'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function approveComment(id: string, postSlug: string) {
  const supabase = await createClient()
  await supabase.from('comments').update({ approved: true }).eq('id', id)
  revalidatePath(`/blog/${postSlug}`)
  revalidatePath('/admin/comments')
}

export async function rejectComment(id: string) {
  const supabase = await createClient()
  await supabase.from('comments').delete().eq('id', id)
  revalidatePath('/admin/comments')
}

export async function replyToComment(id: string, postSlug: string, formData: FormData) {
  const supabase = await createClient()
  const reply = formData.get('reply') as string
  if (!reply?.trim()) return

  await supabase
    .from('comments')
    .update({
      admin_reply: reply.trim(),
      admin_replied_at: new Date().toISOString(),
      approved: true,
    })
    .eq('id', id)

  revalidatePath(`/blog/${postSlug}`)
  revalidatePath('/admin/comments')
}
