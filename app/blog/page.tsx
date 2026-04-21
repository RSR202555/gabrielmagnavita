import { createClient } from '@/lib/supabase/server'
import type { Post } from '@/types/blog'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | Gabriel Magnavita',
  description: 'Reflexões sobre psicologia transpessoal, saúde mental e autoconhecimento.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        {/* Hero — fundo branco para contrastar com o header navy */}
        <section className="bg-white pt-32 pb-12 px-6 text-center border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block font-body text-xs font-semibold text-golden uppercase tracking-widest mb-4">
              Artigos & Reflexões
            </span>
            <h1 className="font-headline font-bold text-4xl md:text-5xl text-navy-blue leading-tight mb-4">
              Blog
            </h1>
            <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed">
              Reflexões sobre psicologia transpessoal, saúde mental e autoconhecimento.
            </p>
          </div>
        </section>

        {/* Grid de posts */}
        <section className="bg-light-gray py-16 px-6 flex-1">
          <div className="max-w-5xl mx-auto">
            {!posts || posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-20 h-20 rounded-full bg-navy-blue/10 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-4xl text-navy-blue/40">
                    article
                  </span>
                </div>
                <h2 className="font-headline font-bold text-navy-blue text-xl mb-2">
                  Nenhum artigo publicado ainda
                </h2>
                <p className="font-body text-gray-400 text-sm max-w-sm">
                  Em breve Gabriel compartilhará reflexões e conteúdos sobre psicologia transpessoal.
                </p>
              </div>
            ) : (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {(posts as Post[]).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
                  >
                    {post.cover_image ? (
                      <div className="relative h-56 overflow-hidden bg-white p-3">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full rounded-xl object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        {post.category && (
                          <span className="absolute top-3 left-3 bg-navy-blue/90 text-golden text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="h-44 bg-gradient-to-br from-navy-blue/10 to-navy-blue/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                        <span className="material-symbols-outlined text-5xl text-navy-blue/20">
                          article
                        </span>
                        {post.category && (
                          <span className="absolute top-3 left-3 bg-navy-blue/10 text-navy-blue text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-headline font-bold text-navy-blue text-lg leading-snug mb-3 group-hover:text-golden transition-colors duration-200">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="font-body text-gray-500 text-sm flex-1 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="font-body text-xs text-gray-400">
                          {post.published_at ? formatDate(post.published_at) : ''}
                        </span>
                        <span className="flex items-center gap-1 text-navy-blue font-body text-sm font-semibold group-hover:text-golden transition-colors duration-200">
                          Ler mais
                          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
