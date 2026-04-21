'use client'

import { useState } from 'react'

type Props = {
  commentId: string
  postSlug: string
  action: (formData: FormData) => Promise<void>
}

export default function ReplyForm({ action }: Props) {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="mt-3 flex items-center gap-1 text-xs font-body text-navy-blue hover:text-golden transition-colors"
      >
        <span className="material-symbols-outlined text-sm">reply</span>
        Responder
      </button>
    )
  }

  return (
    <form action={action} className="mt-3 space-y-2" onSubmit={() => setOpen(false)}>
      <textarea
        name="reply"
        rows={3}
        required
        className="w-full border border-gray-200 rounded-lg px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue resize-none"
        placeholder="Escreva sua resposta..."
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-navy-blue text-white font-body font-semibold px-4 py-1.5 rounded-lg text-xs hover:bg-navy-blue/90 transition-colors"
        >
          Enviar resposta
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-gray-400 font-body text-xs hover:text-gray-600 px-2"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
