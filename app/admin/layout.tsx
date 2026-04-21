import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import LogoutButton from './LogoutButton'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'dashboard' },
  { href: '/admin/posts', label: 'Posts', icon: 'article' },
  { href: '/admin/posts/new', label: 'Novo post', icon: 'add_circle' },
  { href: '/admin/comments', label: 'Comentários', icon: 'chat' },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return <>{children}</>

  return (
    <div className="min-h-screen flex bg-light-gray">
      <aside
        className="w-60 bg-navy-blue flex flex-col shrink-0 shadow-xl"
        style={{
          backgroundImage: "url('/mandala-azul-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/10 flex items-center gap-3">
          <img src="/logo-mandala.png" alt="Logo" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <p className="font-headline font-bold text-white text-sm">Gabriel Magnavita</p>
            <p className="font-body text-golden text-[10px] uppercase tracking-wider">Painel Admin</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white transition-colors font-body text-sm"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/10 space-y-1">
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-300 hover:bg-white/10 hover:text-white transition-colors font-body text-sm"
          >
            <span className="material-symbols-outlined text-xl">open_in_new</span>
            Ver site
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
