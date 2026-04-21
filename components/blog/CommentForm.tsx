'use client'

import { useState, useTransition } from 'react'

type Props = {
  postId: string
  onSubmit: (formData: FormData) => Promise<{ error?: string }>
}

export default function CommentForm({ postId, onSubmit }: Props) {
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.set('post_id', postId)

    startTransition(async () => {
      const result = await onSubmit(formData)
      if (result?.error) {
        setError(result.error)
      } else {
        setSubmitted(true)
      }
    })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <span className="material-symbols-outlined text-3xl text-green-500 block mb-2">
          check_circle
        </span>
        <p className="font-body text-green-700 font-medium">
          Comentário enviado! Será publicado após aprovação.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            Nome *
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
            placeholder="seu@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-body text-sm font-medium text-gray-700 mb-1">
          Mensagem *
        </label>
        <textarea
          name="content"
          required
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue resize-none"
          placeholder="Escreva seu comentário..."
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm font-body">{error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-navy-blue text-white font-body font-semibold px-6 py-2.5 rounded-lg hover:bg-navy-blue/90 transition-colors disabled:opacity-60"
      >
        {isPending ? 'Enviando...' : 'Enviar comentário'}
      </button>
    </form>
  )
}
