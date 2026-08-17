import { useState, useEffect } from 'react'
import { AppView } from '../App'
import { trainingCategories, totalCourses } from '../data/trainings'

// Auto-import all training images
const allImageLoaders = import.meta.glob<{ default: string }>('../imports/treinamentos/*.{png,jpg,jpeg}')

interface Props {
  onNavigate: (v: AppView) => void
}

export default function TrainingsPage({ onNavigate }: Props) {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
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
          <p className="font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Capacitação</p>
          <h1 className="font-josefin text-white font-bold uppercase text-4xl md:text-5xl tracking-[0.06em]">
            Treinamentos
          </h1>
          <div className="mt-3 w-12 h-1 bg-brand-teal" />
          <p className="mt-6 text-white/60 max-w-lg leading-relaxed">
            Oferecemos <strong className="text-white">{totalCourses}+ cursos</strong> certificados conforme as Normas Regulamentadoras,
            ministrados por profissionais habilitados.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-brand-teal py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <div className="font-josefin text-white font-bold text-2xl">{totalCourses}+</div>
            <div className="text-white/80 text-xs uppercase tracking-wider mt-1">Cursos disponíveis</div>
          </div>
          <div>
            <div className="font-josefin text-white font-bold text-2xl">12</div>
            <div className="text-white/80 text-xs uppercase tracking-wider mt-1">Normas Regulamentadoras</div>
          </div>
          <div>
            <div className="font-josefin text-white font-bold text-2xl">100%</div>
            <div className="text-white/80 text-xs uppercase tracking-wider mt-1">Conforme legislação</div>
          </div>
        </div>
      </div>

      {/* Course sections by category */}
      {trainingCategories.map((category) => (
        <section key={category.name} className="py-16 border-b border-brand-light/30 last:border-0">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-brand-teal" />
                <h2 className="font-josefin text-brand-brown font-bold uppercase text-xl tracking-[0.06em]">
                  {category.name}
                </h2>
              </div>
              <p className="text-brand-gray text-sm ml-5">
                {category.courses.length} {category.courses.length === 1 ? 'curso disponível' : 'cursos disponíveis'}
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.courses.map((course, i) => {
                const imgKey = course.image
                  ? Object.keys(allImageLoaders).find((p) => p.endsWith(`/${course.image}`))
                  : null

                return (
                  <div
                    key={i}
                    className="group bg-white border border-brand-light/40 hover:border-brand-teal/50 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      {imgKey ? (
                        <CourseImage imagePath={imgKey} />
                      ) : (
                        <div className="w-full h-44 bg-gradient-to-br from-brand-cream to-brand-light/30 flex items-center justify-center">
                          <span className="font-josefin text-brand-brown/20 font-bold text-3xl">{course.nr}</span>
                        </div>
                      )}
                      {/* Hours badge */}
                      <div className="absolute top-3 right-3 bg-brand-brown/90 text-white font-josefin text-xs tracking-wider px-2.5 py-1.5 flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {course.hours}h
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="p-5">
                      <span className="inline-block font-josefin text-[10px] tracking-[0.2em] uppercase text-brand-teal font-semibold mb-2">
                        {course.nr}
                      </span>
                      <h3 className="font-josefin text-brand-brown font-semibold text-sm uppercase tracking-wide leading-snug">
                        {course.title}
                      </h3>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-0.5 bg-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="bg-brand-brown py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="font-josefin text-white uppercase font-bold tracking-wide text-2xl">
            Precisa de um treinamento específico?
          </h3>
          <p className="mt-4 text-white/60 leading-relaxed">
            Oferecemos treinamentos personalizados para atender às necessidades da sua empresa.
            Entre em contato e solicite um orçamento.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate({ name: 'landing' })}
              className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
            >
              Solicitar Orçamento
            </button>
            <a
              href="https://wa.me/551239226658?text=Ol%C3%A1.%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20treinamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white/30 text-white hover:border-brand-teal hover:text-brand-teal transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <button
          onClick={() => onNavigate({ name: 'landing' })}
          className="flex items-center gap-2 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal hover:gap-3 transition-all"
        >
          ← Voltar ao site
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-brand-brown py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-josefin text-white/30 text-xs tracking-[0.15em] uppercase">
            © 2025-2026 Morelli Engenharia e Assessoria em Segurança do Trabalho
          </p>
          <button
            onClick={() => onNavigate({ name: 'landing' })}
            className="font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-6 py-2.5 hover:bg-brand-teal hover:text-white transition-all"
          >
            ← Voltar ao site
          </button>
        </div>
      </footer>
    </div>
  )
}

// Lazy image component
function CourseImage({ imagePath }: { imagePath: string }) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    allImageLoaders[imagePath]?.().then((mod) => setSrc(mod.default))
  }, [imagePath])

  if (!src) {
    return <div className="w-full h-44 bg-brand-cream animate-pulse" />
  }

  return (
    <img
      src={src}
      alt=""
      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
    />
  )
}
