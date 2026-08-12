import { useState, useEffect } from 'react'
import { AppView } from '../App'
import { trainingCategories, totalCourses } from '../data/trainings'

// Auto-import all training images
const allImages = import.meta.glob<{ default: string }>('../imports/treinamentos/*.{png,jpg,jpeg}')

// Map category names to representative image filename keywords
const categoryImageMap: Record<string, string> = {
  'NR 1': 'nr1',
  'NR 5': 'CIPA',
  'NR 6': 'NR 6',
  'NR 10': 'NR 10',
  'NR 13': 'NR 13',
  'NR 15': 'NR 15',
  'NR 17': 'NR 17',
  'NR 20': 'NR20',
  'NR 23': 'nr23',
  'NR 33': 'nr33',
  'NR 35': 'nr35',
  'Outros': 'integracao',
}

// Resolve image path synchronously from glob result keys
function findImage(keyword: string): string | null {
  const paths = Object.keys(allImages)
  const match = paths.find((path) => {
    const filename = path.split('/').pop()?.toLowerCase() || ''
    return filename.includes(keyword.toLowerCase())
  })
  return match || null
}

interface Props {
  onNavigate: (v: AppView) => void
}

export default function TrainingsPage({ onNavigate }: Props) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (name: string) => {
    setExpandedCategory(expandedCategory === name ? null : name)
  }

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

      {/* Training categories */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid gap-6">
          {trainingCategories.map((category) => {
            const isExpanded = expandedCategory === category.name
            const nrKey = Object.keys(categoryImageMap).find((k) => category.name.includes(k)) || 'Outros'
            const imgKey = categoryImageMap[nrKey]
            const imgPath = findImage(imgKey)

            return (
              <div
                key={category.name}
                className="border border-brand-light/50 bg-white overflow-hidden"
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center gap-5 px-6 py-5 hover:bg-brand-cream/50 transition-colors text-left"
                >
                  {/* Category image thumbnail */}
                  {imgPath && (
                    <CategoryImage imagePath={imgPath} />
                  )}

                  {/* Category info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-teal/10 text-brand-teal font-josefin font-bold text-xs rounded">
                        {category.courses.length}
                      </span>
                      <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.08em]">
                        {category.name}
                      </h2>
                    </div>
                    <p className="text-brand-gray text-xs ml-11">
                      {category.courses.reduce((min, c) => Math.min(min, c.hours), Infinity)}h a {Math.max(...category.courses.map((c) => c.hours))}h por curso
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-5 h-5 text-brand-teal transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Courses list */}
                {isExpanded && (
                  <div className="border-t border-brand-light/30">
                    {category.courses.map((course, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-6 py-4 pl-20 ${
                          i < category.courses.length - 1 ? 'border-b border-brand-light/20' : ''
                        } hover:bg-brand-cream/30 transition-colors`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0" />
                          <span className="text-brand-gray text-sm">{course.title}</span>
                        </div>
                        <span className="font-josefin text-xs tracking-wider text-brand-teal font-semibold whitespace-nowrap ml-4">
                          {course.hours}h
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-brown p-10 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-josefin uppercase font-semibold tracking-wide text-lg">
                Precisa de um treinamento específico?
              </h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">
                Entre em contato e solicite um orçamento personalizado para sua empresa.
              </p>
            </div>
            <button
              onClick={() => onNavigate({ name: 'landing' })}
              className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors flex-shrink-0"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => onNavigate({ name: 'landing' })}
          className="mt-10 flex items-center gap-2 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal hover:gap-3 transition-all"
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

// Lazy image component using glob import
function CategoryImage({ imagePath }: { imagePath: string }) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    allImages[imagePath]?.().then((mod) => {
      setSrc(mod.default)
    })
  }, [imagePath])

  if (!src) {
    return (
      <div className="w-16 h-16 bg-brand-cream rounded flex-shrink-0 animate-pulse" />
    )
  }

  return (
    <img
      src={src}
      alt=""
      className="w-16 h-16 object-cover rounded flex-shrink-0"
    />
  )
}
