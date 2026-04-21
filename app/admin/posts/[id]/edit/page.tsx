import { createClient } from '@/lib/supabase/server'
import PostForm from '@/components/admin/PostForm'
import { updatePost } from '../../actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) notFound()

  const action = updatePost.bind(null, params.id)

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/posts"
          className="p-1.5 rounded-lg text-gray-400 hover:text-navy-blue hover:bg-navy-blue/10 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </Link>
        <div>
          <h1 className="font-headline font-bold text-navy-blue text-2xl">Editar post</h1>
          <p className="font-body text-gray-400 text-sm mt-0.5 max-w-sm truncate">{post.title}</p>
        </div>
      </div>

      <PostForm post={post} action={action} submitLabel="Salvar alterações" />
    </div>
  )
}
