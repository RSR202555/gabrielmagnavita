'use client'

import { useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import type { Post } from '@/types/blog'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="font-body text-gray-400 text-sm">Carregando editor...</p>
    </div>
  ),
})

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

type Props = {
  post?: Post
  action: (formData: FormData) => Promise<{ error?: string } | void>
  submitLabel?: string
}

export default function PostForm({ post, action, submitLabel = 'Salvar post' }: Props) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [published, setPublished] = useState(post?.published ?? false)
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '')
  const [uploading, setUploading] = useState(false)

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!post) setSlug(slugify(value))
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      })
      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Falha no upload da imagem.')
        return
      }

      if (result.url) setCoverImage(result.url)
      else setError('Falha no upload da imagem.')
    } catch {
      setError('Erro ao fazer upload da imagem.')
    } finally {
      setUploading(false)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const formData = new FormData(e.currentTarget)
    formData.set('content', content)
    formData.set('published', String(published))
    formData.set('cover_image', coverImage)

    startTransition(async () => {
      const result = await action(formData)
      if (result && 'error' in result && result.error) {
        setError(result.error)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Título *
            </label>
            <input
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
              placeholder="Título do post"
            />
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Slug *
            </label>
            <input
              name="slug"
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
              placeholder="titulo-do-post"
            />
            <p className="font-body text-xs text-gray-400 mt-1">
              URL: /blog/{slug || 'titulo-do-post'}
            </p>
          </div>

          <div>
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Resumo
            </label>
            <textarea
              name="excerpt"
              rows={2}
              defaultValue={post?.excerpt ?? ''}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue resize-none"
              placeholder="Breve descrição para listagem e SEO"
            />
          </div>

          <div data-color-mode="light">
            <label className="block font-body text-sm font-medium text-gray-700 mb-1">
              Conteúdo *
            </label>
            <MDEditor
              value={content}
              onChange={(v) => setContent(v ?? '')}
              height={400}
              preview="edit"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            <h3 className="font-body font-semibold text-gray-700 text-sm">Publicação</h3>

            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-10 h-5 rounded-full relative transition-colors ${published ? 'bg-navy-blue' : 'bg-gray-200'}`}
                onClick={() => setPublished(!published)}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${published ? 'translate-x-5' : 'translate-x-0.5'}`}
                />
              </div>
              <span className="font-body text-sm text-gray-600">
                {published ? 'Publicado' : 'Rascunho'}
              </span>
            </label>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            <h3 className="font-body font-semibold text-gray-700 text-sm">Detalhes</h3>

            <div>
              <label className="block font-body text-xs font-medium text-gray-500 mb-1">
                Categoria
              </label>
              <input
                name="category"
                type="text"
                defaultValue={post?.category ?? ''}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
                placeholder="Ex: Psicologia"
              />
            </div>

            <div>
              <label className="block font-body text-xs font-medium text-gray-500 mb-1">
                Tags
              </label>
              <input
                name="tags"
                type="text"
                defaultValue={post?.tags?.join(', ') ?? ''}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-blue/30 focus:border-navy-blue"
                placeholder="ansiedade, autoconhecimento"
              />
              <p className="font-body text-xs text-gray-400 mt-1">Separadas por vírgula</p>
            </div>

            <div>
              <label className="block font-body text-xs font-medium text-gray-500 mb-1">
                Imagem de capa
              </label>
              <input type="hidden" name="cover_image" value={coverImage} />
              {coverImage && (
                <div className="relative mb-2 rounded-lg overflow-hidden border border-gray-200">
                  <img src={coverImage} alt="Capa" className="w-full h-32 object-cover" />
                  <button
                    type="button"
                    onClick={() => setCoverImage('')}
                    className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                    title="Remover imagem"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              )}
              <label className={`flex items-center gap-2 justify-center w-full border-2 border-dashed rounded-lg px-3 py-3 font-body text-sm cursor-pointer transition-colors ${uploading ? 'border-navy-blue/30 text-navy-blue/40' : 'border-gray-200 text-gray-400 hover:border-navy-blue/40 hover:text-navy-blue'}`}>
                <span className="material-symbols-outlined text-lg">
                  {uploading ? 'hourglass_empty' : 'upload'}
                </span>
                {uploading ? 'Enviando...' : coverImage ? 'Trocar imagem' : 'Enviar imagem'}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCoverUpload}
                  disabled={uploading}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm font-body">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isPending || uploading}
          className="bg-golden text-navy-blue font-body font-bold px-6 py-2.5 rounded-lg hover:bg-golden/90 transition-colors disabled:opacity-60 text-sm"
        >
          {isPending ? 'Salvando...' : submitLabel}
        </button>
      </div>
    </form>
  )
}
