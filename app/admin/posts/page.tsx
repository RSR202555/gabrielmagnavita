import { createClient } from '@/lib/supabase/server'
import type { Post } from '@/types/blog'
import Link from 'next/link'
import { deletePost, togglePublish } from './actions'
import ConfirmSubmitButton from '@/components/admin/ConfirmSubmitButton'

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default async function PostsPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline font-bold text-navy-blue text-2xl">Posts</h1>
          <p className="font-body text-gray-400 text-sm mt-1">
            {posts?.length ?? 0} post{(posts?.length ?? 0) !== 1 ? 's' : ''}
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 bg-golden text-navy-blue font-body font-bold px-4 py-2.5 rounded-lg hover:bg-golden/90 transition-colors text-sm"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Novo post
        </Link>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center shadow-sm">
          <span className="material-symbols-outlined text-5xl text-gray-300 block mb-3">article</span>
          <p className="font-body text-gray-400">Nenhum post ainda.</p>
          <Link
            href="/admin/posts/new"
            className="inline-block mt-4 bg-golden text-navy-blue font-body font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-golden/90 transition-colors"
          >
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm">Título</th>
                <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm hidden md:table-cell">Categoria</th>
                <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm hidden sm:table-cell">Data</th>
                <th className="text-left px-6 py-4 font-body font-semibold text-gray-500 text-sm">Status</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(posts as Post[]).map((post) => (
                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-body font-medium text-gray-800 text-sm leading-snug">
                      {post.title}
                    </p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="font-body text-gray-400 text-xs">
                      {post.category || '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="font-body text-gray-400 text-xs">
                      {formatDate(post.created_at)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <form action={togglePublish.bind(null, post.id, post.published)}>
                      <button
                        type="submit"
                        className={`text-xs font-body font-semibold px-3 py-1 rounded-full transition-colors ${
                          post.published
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {post.published ? 'Publicado' : 'Rascunho'}
                      </button>
                    </form>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-navy-blue hover:bg-navy-blue/10 transition-colors"
                        title="Editar"
                      >
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </Link>
                      <form action={deletePost.bind(null, post.id)}>
                        <ConfirmSubmitButton
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Deletar"
                          message="Deletar este post?"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </ConfirmSubmitButton>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
