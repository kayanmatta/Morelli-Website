import { useState } from 'react'
import { AppView } from '../App'
import { articles } from '../data/articles'

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

const categories = ['Todos', 'Legislação', 'Saúde Ocupacional', 'Treinamentos', 'Laudos Técnicos', 'Gestão de SST']

interface Props {
  view: AppView
  onNavigate: (v: AppView) => void
}

export default function BlogPage({ view, onNavigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const currentArticleId = view.name === 'article' ? view.id : null
  const currentArticle = currentArticleId ? articles.find((a) => a.id === currentArticleId) : null

  const filtered = activeCategory === 'Todos'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  if (currentArticle) {
    const paragraphs = currentArticle.content.split('\n\n').filter(Boolean)

    // Schema.org BlogPosting for SEO
    const blogPostingSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": currentArticle.title,
      "description": currentArticle.excerpt,
      "image": imgMap[currentArticle.imageKey],
      "datePublished": currentArticle.date,
      "author": {
        "@type": "Organization",
        "name": "Morelli Engenharia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Morelli Engenharia",
        "logo": {
          "@type": "ImageObject",
          "url": "https://morelliengenharia.com.br/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://morelliengenharia.com.br/#blog"
      }
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
            src={imgMap[currentArticle.imageKey]}
            alt={currentArticle.title}
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
                  {currentArticle.category}
                </span>
                <span className="text-white/50 text-xs font-josefin tracking-wider">{currentArticle.readTime} leitura · {currentArticle.date}</span>
              </div>
              <h1 className="font-josefin text-white font-bold uppercase text-2xl md:text-3xl leading-snug tracking-[0.06em]">
                {currentArticle.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-brand-light/50">
          <div className="max-w-4xl mx-auto px-8 py-4 flex items-center gap-2 text-xs font-josefin tracking-wider text-brand-light">
            <button onClick={() => onNavigate({ name: 'landing' })} className="hover:text-brand-teal active:text-brand-teal-dark transition-colors cursor-pointer">
              Início
            </button>
            <span>/</span>
            <button onClick={() => onNavigate({ name: 'blog' })} className="hover:text-brand-teal active:text-brand-teal-dark transition-colors cursor-pointer">
              Blog
            </button>
            <span>/</span>
            <span className="text-brand-gray truncate max-w-xs">{currentArticle.title}</span>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <p className="text-lg text-brand-gray leading-relaxed font-medium border-l-4 border-brand-teal pl-5 mb-10">
            {currentArticle.excerpt}
          </p>

          <div className="prose max-w-none">
            {paragraphs.map((p, i) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return (
                  <h3 key={i} className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mt-8 mb-3">
                    {p.replace(/\*\*/g, '')}
                  </h3>
                )
              }
              if (p.startsWith('- ')) {
                const items = p.split('\n').filter((l) => l.startsWith('- '))
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-brand-gray leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                        <span>{item.slice(2)}</span>
                      </li>
                    ))}
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
              <button
                onClick={() => onNavigate({ name: 'landing' })}
                className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95 transition-all flex-shrink-0 cursor-pointer"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

          {/* Back to blog */}
          <button
            onClick={() => onNavigate({ name: 'blog' })}
            className="mt-10 flex items-center gap-2 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal hover:gap-3 active:opacity-50 transition-all cursor-pointer"
          >
            ← Voltar ao blog
          </button>
        </div>

        {/* Related articles */}
        <div className="bg-brand-cream py-20">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-josefin text-brand-brown font-bold uppercase text-xl tracking-wide mb-10">
              Outros Artigos
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.id !== currentArticle.id)
                .slice(0, 3)
                .map((a) => (
                  <article
                    key={a.id}
                    className="group cursor-pointer bg-white"
                    onClick={() => onNavigate({ name: 'article', id: a.id })}
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

        {/* Simple footer */}
        <BlogFooter onNavigate={onNavigate} />
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Blog header */}
      <div className="relative py-24 bg-brand-brown overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #02b5a5 0, #02b5a5 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <p className="font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Conhecimento</p>
          <h1 className="font-josefin text-white font-bold uppercase text-4xl md:text-5xl tracking-[0.06em]">
            Blog e Artigos
          </h1>
          <div className="mt-3 w-12 h-1 bg-brand-teal" />
          <p className="mt-6 text-white/60 max-w-lg leading-relaxed">
            Conteúdo especializado sobre Segurança e Saúde do Trabalho para
            manter sua empresa sempre informada e em conformidade.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="border-b border-brand-light/50 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-josefin text-xs tracking-[0.15em] uppercase py-4 px-5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'border-brand-teal text-brand-teal'
                    : 'border-transparent text-brand-gray hover:text-brand-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Featured (first article) */}
        {activeCategory === 'Todos' && (
          <article
            className="group cursor-pointer grid md:grid-cols-2 gap-0 mb-16 bg-brand-cream hover:bg-white transition-colors border border-brand-light/30"
            onClick={() => onNavigate({ name: 'article', id: filtered[0].id })}
          >
            <div className="overflow-hidden h-72 md:h-auto">
              <img
                src={imgMap[filtered[0].imageKey]}
                alt={filtered[0].title}
                width={600}
                height={288}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-josefin text-[10px] tracking-[0.2em] uppercase text-white bg-brand-teal px-2.5 py-1">
                  {filtered[0].category}
                </span>
                <span className="text-brand-light text-xs font-josefin">{filtered[0].readTime} leitura</span>
              </div>
              <h2 className="font-josefin text-brand-brown font-bold uppercase text-xl leading-snug tracking-wide group-hover:text-brand-teal transition-colors">
                {filtered[0].title}
              </h2>
              <p className="mt-4 text-brand-gray text-sm leading-relaxed">{filtered[0].excerpt}</p>
              <div className="mt-6 flex items-center gap-2 font-josefin text-xs tracking-[0.15em] uppercase text-brand-teal">
                <span>Ler artigo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-light/50 font-josefin text-xs text-brand-light tracking-wider">
                {filtered[0].date}
              </div>
            </div>
          </article>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'Todos' ? filtered.slice(1) : filtered).map((art) => (
            <article
              key={art.id}
              className="group cursor-pointer"
              onClick={() => onNavigate({ name: 'article', id: art.id })}
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={imgMap[art.imageKey]}
                  alt={art.title}
                  width={400}
                  height={208}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-josefin text-[10px] tracking-[0.2em] uppercase text-white bg-brand-teal px-2.5 py-1">
                  {art.category}
                </span>
                <span className="text-brand-light text-xs">{art.readTime} leitura</span>
              </div>
              <h3 className="font-josefin text-brand-brown font-semibold uppercase text-base tracking-wide leading-snug group-hover:text-brand-teal transition-colors">
                {art.title}
              </h3>
              <p className="mt-3 text-brand-gray text-sm leading-relaxed line-clamp-3">{art.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 font-josefin text-xs tracking-[0.15em] uppercase text-brand-teal">
                <span>Ler artigo</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-light/50 font-josefin text-xs text-brand-light tracking-wider">
                {art.date}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-josefin text-brand-light text-sm tracking-wider uppercase">
              Nenhum artigo nesta categoria ainda.
            </p>
          </div>
        )}
      </div>

      <BlogFooter onNavigate={onNavigate} />
    </div>
  )
}

function BlogFooter({ onNavigate }: { onNavigate: (v: AppView) => void }) {
  return (
    <footer className="bg-brand-brown py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-josefin text-white/50 text-xs tracking-[0.15em] uppercase">
          © 2025-2026 Morelli Engenharia e Assessoria em Segurança do Trabalho
        </p>
        <button
          onClick={() => onNavigate({ name: 'landing' })}
          className="font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-6 py-2.5 hover:bg-brand-teal hover:text-white active:scale-95 transition-all cursor-pointer"
        >
          ← Voltar ao site
        </button>
      </div>
    </footer>
  )
}
