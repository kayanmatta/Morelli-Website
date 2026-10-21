import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import type { Article } from '../data/articles'
import { articles } from '../data/articles'
import { SITE_URL } from '../App'
import { BlogFooter } from './BlogPage'

import heroImg from '@/imports/hero-sst.jpg'
import equipeImg from '@/imports/equipe.jpg'
import higieneImg from '@/imports/higiene.jpg'
import treinamentoImg from '@/imports/treinamento.jpg'

const imgMap: Record<string, string> = {
  hero: heroImg,
  equipe: equipeImg,
  higiene: higieneImg,
  treinamento: treinamentoImg,
}

interface Props {
  article: Article
}

export default function ArticlePage({ article }: Props) {
  const navigate = useNavigate()
  const canonicalUrl = `${SITE_URL}/blog/${article.slug}`
  const ogImageUrl = `${SITE_URL}/og-image.jpg`
  const paragraphs = article.content.split('\n\n').filter(Boolean)

  // Atualiza title/canonical/metadados da própria URL (SEO por página)
  useEffect(() => {
    document.title = `${article.title} | Morelli Engenharia`

    const update = (selector: string, apply: (el: HTMLMetaElement) => void) => {
      const el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (el) apply(el)
    }

    update('meta[name="description"]', (el) => el.setAttribute('content', article.excerpt))
    update('meta[property="og:title"]', (el) => el.setAttribute('content', article.title))
    update('meta[property="og:description"]', (el) => el.setAttribute('content', article.excerpt))
    update('meta[property="og:url"]', (el) => el.setAttribute('content', canonicalUrl))
    update('meta[property="og:type"]', (el) => el.setAttribute('content', 'article'))
    update('meta[name="twitter:title"]', (el) => el.setAttribute('content', article.title))
    update('meta[name="twitter:description"]', (el) => el.setAttribute('content', article.excerpt))

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    return () => {
      document.title = 'Morelli Engenharia | Segurança e Saúde do Trabalho'
      const c = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (c) c.href = `${SITE_URL}/`
      update('meta[property="og:type"]', (el) => el.setAttribute('content', 'website'))
      update('meta[property="og:url"]', (el) => el.setAttribute('content', `${SITE_URL}/`))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article.slug])

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.excerpt,
    'image': ogImageUrl,
    'datePublished': article.dateISO,
    'dateModified': article.dateISO,
    'inLanguage': 'pt-BR',
    'author': { '@type': 'Organization', 'name': 'Morelli Engenharia', 'url': SITE_URL },
    'publisher': {
      '@type': 'Organization',
      'name': 'Morelli Engenharia',
      'logo': { '@type': 'ImageObject', 'url': ogImageUrl },
    },
    'mainEntityOfPage': { '@type': 'WebPage', '@id': canonicalUrl },
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Schema.org BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Article hero */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={imgMap[article.imageKey]}
          alt={article.title}
          width={1200}
          height={320}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-brown/75" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-8 pb-12 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-josefin text-[10px] tracking-[0.2em] uppercase text-white bg-brand-teal px-2.5 py-1">
                {article.category}
              </span>
              <span className="text-white/50 text-xs font-josefin tracking-wider">{article.readTime} leitura · {article.date}</span>
            </div>
            <h1 className="font-josefin text-white font-bold uppercase text-2xl md:text-3xl leading-snug tracking-[0.06em]">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b border-brand-light/50">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center gap-2 text-xs font-josefin tracking-wider text-brand-light">
          <button onClick={() => navigate('/')} className="hover:text-brand-teal active:text-brand-teal-dark transition-colors cursor-pointer">
            Início
          </button>
          <span>/</span>
          <button onClick={() => navigate('/blog')} className="hover:text-brand-teal active:text-brand-teal-dark transition-colors cursor-pointer">
            Blog
          </button>
          <span>/</span>
          <span className="text-brand-gray truncate max-w-xs">{article.title}</span>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-lg text-brand-gray leading-relaxed font-medium border-l-4 border-brand-teal pl-5 mb-10">
          {article.excerpt}
        </p>

        <div className="prose max-w-none">
          {paragraphs.map((p, i) => {
            if (p.startsWith('**') && p.endsWith('**')) {
              return (
                <h2 key={i} className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mt-8 mb-3">
                  {p.replace(/\*\*/g, '')}
                </h2>
              )
            }
            if (p.startsWith('- ')) {
              const items = p.split('\n').filter((l) => l.startsWith('- '))
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => {
                    const text = item.slice(2)
                    const parts = text.split(/(\*\*[^*]+\*\*)/)
                    return (
                      <li key={j} className="flex items-start gap-3 text-brand-gray leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                        <span>
                          {parts.map((part, k) =>
                            part.startsWith('**') ? (
                              <strong key={k} className="text-brand-brown font-semibold">
                                {part.replace(/\*\*/g, '')}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              )
            }
            const parts = p.split(/(\*\*[^*]+\*\*)/)
            return (
              <p key={i} className="text-brand-gray leading-relaxed mb-5">
                {parts.map((part, j) =>
                  part.startsWith('**') ? (
                    <strong key={j} className="text-brand-brown font-semibold">
                      {part.replace(/\*\*/g, '')}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-brown p-10 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-josefin uppercase font-semibold tracking-wide text-lg">
                Precisa de assessoria em SST?
              </h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">
                A Morelli Engenharia está pronta para ajudar sua empresa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href={`https://wa.me/551239226658?text=${encodeURIComponent(`Olá. Li o artigo "${article.title}" no site e gostaria de mais informações.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#25D366] text-white hover:bg-[#20BD5A] active:scale-95 transition-all text-center"
              >
                Falar no WhatsApp
              </a>
              <button
                onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }), 150) }}
                className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95 transition-all cursor-pointer"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>

        {/* Back to blog */}
        <button
          onClick={() => navigate('/blog')}
          className="mt-10 flex items-center gap-2 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal hover:gap-3 active:opacity-50 transition-all cursor-pointer"
        >
          ← Voltar ao blog
        </button>
      </article>

      {/* Related articles */}
      <div className="bg-brand-cream py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-josefin text-brand-brown font-bold uppercase text-xl tracking-wide mb-10">
            Outros Artigos
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {articles
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((a) => (
                <article
                  key={a.id}
                  className="group cursor-pointer bg-white"
                  onClick={() => navigate(`/blog/${a.slug}`)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={imgMap[a.imageKey]}
                      alt={a.title}
                      width={300}
                      height={144}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="font-josefin text-[10px] tracking-[0.2em] uppercase text-brand-teal">
                      {a.category}
                    </span>
                    <h3 className="mt-2 font-josefin text-brand-brown font-semibold text-xs uppercase tracking-wide leading-snug group-hover:text-brand-teal transition-colors">
                      {a.title}
                    </h3>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  )
}
