import PostForm from '@/components/admin/PostForm'
import { createPost } from '../actions'
import Link from 'next/link'

export default function NewPostPage() {
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
          <h1 className="font-headline font-bold text-navy-blue text-2xl">Novo post</h1>
          <p className="font-body text-gray-400 text-sm mt-0.5">Crie um novo artigo para o blog.</p>
        </div>
      </div>

      <PostForm action={createPost} submitLabel="Criar post" />
    </div>
  )
}
