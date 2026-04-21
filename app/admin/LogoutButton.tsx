'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-blue-300 hover:bg-white/10 hover:text-white transition-colors font-body text-sm"
    >
      <span className="material-symbols-outlined text-xl">logout</span>
      Sair
    </button>
  )
}
