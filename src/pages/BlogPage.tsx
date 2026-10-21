import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { AppView, SITE_URL } from '../App'
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
  onNavigate: (v: AppView) => void
}

export default function BlogPage({ onNavigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Metadados desta URL (renderizados no build) */}
      <Head>
        <title>Blog de Segurança e Saúde do Trabalho | Morelli Engenharia</title>
        <meta name="description" content="Artigos sobre PGR, PCMSO, NRs, laudos técnicos e riscos psicossociais. Conteúdo especializado em Segurança e Saúde do Trabalho para sua empresa." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog de Segurança e Saúde do Trabalho | Morelli Engenharia" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Segurança e Saúde do Trabalho | Morelli Engenharia" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
      </Head>

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
                <Link to={`/blog/${filtered[0].slug}`}>{filtered[0].title}</Link>
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
                <Link to={`/blog/${art.slug}`}>{art.title}</Link>
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

      <BlogFooter />
    </div>
  )
}

export function BlogFooter() {
  return (
    <footer className="bg-brand-brown py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-josefin text-white/50 text-xs tracking-[0.15em] uppercase">
          © 2025-2026 Morelli Engenharia e Assessoria em Segurança do Trabalho
        </p>
        <Link
          to="/"
          className="font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-6 py-2.5 hover:bg-brand-teal hover:text-white active:scale-95 transition-all cursor-pointer"
        >
          ← Voltar ao site
        </Link>
      </div>
    </footer>
  )
}
