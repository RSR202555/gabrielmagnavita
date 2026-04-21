'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('E-mail ou senha incorretos.')
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-navy-blue"
      style={{
        backgroundImage: "url('/mandala-azul-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Card */}
      <div className="w-full max-w-md">
        {/* Logo / identidade */}
        <div className="text-center mb-8">
          <img
            src="/logo-mandala.png"
            alt="Logo Gabriel Magnavita"
            className="w-20 h-20 object-contain mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="font-headline font-bold text-white text-2xl tracking-tight">
            Gabriel Magnavita
          </h1>
          <p className="font-body text-blue-200 text-sm mt-1 uppercase tracking-widest">
            Área Administrativa
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="font-headline font-bold text-navy-blue text-lg mb-1">
            Bem-vindo de volta
          </h2>
          <p className="font-body text-gray-400 text-sm mb-7">
            Entre com suas credenciais para acessar o painel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">
                  mail
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">
                  lock
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <span className="material-symbols-outlined text-red-400 text-lg">error</span>
                <p className="text-red-500 text-sm font-body">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy-blue text-white font-body font-semibold py-3.5 rounded-xl hover:bg-navy-blue/90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">login</span>
                  Entrar
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center font-body text-blue-300/60 text-xs mt-6">
          © {new Date().getFullYear()} Gabriel Magnavita · Psicólogo Clínico
        </p>
      </div>
    </div>
  )
}
