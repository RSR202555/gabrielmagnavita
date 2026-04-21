import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const [{ count: totalPosts }, { count: publishedPosts }, { count: pendingComments }] =
    await Promise.all([
      supabase.from('posts').select('*', { count: 'exact', head: true }),
      supabase.from('posts').select('*', { count: 'exact', head: true }).eq('published', true),
      supabase.from('comments').select('*', { count: 'exact', head: true }).eq('approved', false),
    ])

  const stats = [
    { label: 'Total de posts', value: totalPosts ?? 0, icon: 'article', href: '/admin/posts' },
    { label: 'Publicados', value: publishedPosts ?? 0, icon: 'visibility', href: '/admin/posts' },
    { label: 'Comentários pendentes', value: pendingComments ?? 0, icon: 'chat', href: '/admin/comments', alert: (pendingComments ?? 0) > 0 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-headline font-bold text-navy-blue text-2xl">Dashboard</h1>
        <p className="font-body text-gray-400 text-sm mt-1">Bem-vindo ao painel do blog.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {stats.map(({ label, value, icon, href, alert }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${alert ? 'bg-golden/20' : 'bg-navy-blue/10'}`}>
              <span className={`material-symbols-outlined text-2xl ${alert ? 'text-golden' : 'text-navy-blue'}`}>
                {icon}
              </span>
            </div>
            <div>
              <p className="font-headline font-bold text-2xl text-navy-blue">{value}</p>
              <p className="font-body text-gray-400 text-sm">{label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 bg-golden text-navy-blue font-body font-bold px-5 py-2.5 rounded-lg hover:bg-golden/90 transition-colors text-sm"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Novo post
        </Link>
        <Link
          href="/admin/comments"
          className="flex items-center gap-2 border border-gray-200 text-gray-600 font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Ver comentários
        </Link>
      </div>
    </div>
  )
}
