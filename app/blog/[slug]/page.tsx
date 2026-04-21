import { createClient } from '@/lib/supabase/server'
import type { Post, Comment } from '@/types/blog'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MarkdownContent from '@/components/blog/MarkdownContent'
import CommentForm from '@/components/blog/CommentForm'
import type { Metadata } from 'next'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) return {}

  return {
    title: `${post.title} | Blog Gabriel Magnavita`,
    description: post.excerpt ?? undefined,
  }
}

async function submitComment(formData: FormData): Promise<{ error?: string }> {
  'use server'
  const supabase = await createClient()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const content = formData.get('content') as string
  const post_id = formData.get('post_id') as string

  if (!name || !email || !content || !post_id) {
    return { error: 'Preencha todos os campos.' }
  }

  const { error } = await supabase.from('comments').insert({
    post_id,
    name: name.trim(),
    email: email.trim(),
    content: content.trim(),
  })

  if (error) return { error: 'Erro ao enviar comentário. Tente novamente.' }
  return {}
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  const { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', post.id)
    .eq('approved', true)
    .order('created_at', { ascending: true })

  return (
    <>
      <Header />
      <main className="bg-white pt-28 md:pt-32">
        <section className="px-6 pb-8 pt-8 md:pb-10 md:pt-10">
          <div className="max-w-4xl mx-auto text-center">
          {post.category && (
              <span className="inline-block font-body text-xs font-semibold text-white bg-navy-blue px-4 py-2 rounded-full uppercase tracking-[0.24em] mb-4 shadow-sm">
              {post.category}
            </span>
          )}
            <h1 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl text-navy-blue max-w-3xl mx-auto leading-tight text-balance">
              {post.title}
            </h1>
          {post.published_at && (
              <p className="font-body text-gray-500 mt-4 text-sm md:text-base">
                {formatDate(post.published_at)}
              </p>
          )}
          </div>
        </section>

        <section className="px-6 py-10 md:py-12">
          <div
            className={`mx-auto grid items-start gap-10 ${
              post.cover_image ? 'max-w-6xl lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]' : 'max-w-3xl'
            }`}
          >
            {post.cover_image && (
              <div className="lg:sticky lg:top-32">
                <div className="rounded-[2rem] border border-navy-blue/10 bg-white p-3 shadow-[0_18px_50px_rgba(29,63,94,0.12)] md:p-4">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full rounded-[1.5rem] object-contain max-h-[72vh] bg-white"
                  />
                </div>
              </div>
            )}

            <div className="min-w-0">
              {post.excerpt && (
                <p className="font-body text-gray-500 text-lg italic border-l-4 border-golden pl-4 mb-8">
                  {post.excerpt}
                </p>
              )}
              <article className="prose-custom">
                <MarkdownContent content={post.content} />
              </article>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-light-gray text-navy-blue font-body text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-light-gray py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline font-bold text-2xl text-navy-blue mb-8">
              {(comments?.length ?? 0) > 0
                ? `${comments!.length} comentário${comments!.length > 1 ? 's' : ''}`
                : 'Seja o primeiro a comentar'}
            </h2>

            {comments && comments.length > 0 && (
              <div className="space-y-6 mb-12">
                {(comments as Comment[]).map((comment) => (
                  <div key={comment.id} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-navy-blue/10 flex items-center justify-center">
                        <span className="font-headline font-bold text-navy-blue text-sm">
                          {comment.name[0].toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-gray-800 text-sm">
                          {comment.name}
                        </p>
                        <p className="font-body text-gray-400 text-xs">
                          {formatDate(comment.created_at)}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-gray-700 text-sm leading-relaxed">
                      {comment.content}
                    </p>

                    {comment.admin_reply && (
                      <div className="mt-4 ml-4 bg-navy-blue/5 border-l-4 border-golden rounded-r-xl p-4">
                        <p className="font-body text-xs font-semibold text-golden uppercase tracking-wide mb-1">
                          Gabriel Magnavita respondeu
                        </p>
                        <p className="font-body text-gray-700 text-sm leading-relaxed">
                          {comment.admin_reply}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-headline font-bold text-navy-blue text-lg mb-5">
                Deixe seu comentário
              </h3>
              <CommentForm postId={post.id} onSubmit={submitComment} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
