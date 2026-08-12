import { useState, useEffect } from 'react'
import { AppView } from '../App'
import logoHorizontal from '@/imports/logo_horizontal_morelli_page-0001.jpg'
import logoWhite from '@/imports/Logo_sem_fundo.png'

interface Props {
  view: AppView
  onNavigate: (v: AppView) => void
}

export default function Navbar({ view, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isDark = view.name === 'landing' && !menuOpen

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    if (view.name !== 'landing') {
      onNavigate({ name: 'landing' })
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Início', action: () => { onNavigate({ name: 'landing' }); setMenuOpen(false) } },
    { label: 'Sobre', action: () => scrollTo('sobre') },
    { label: 'Serviços', action: () => scrollTo('servicos') },
    { label: 'Blog', action: () => { onNavigate({ name: 'blog' }); setMenuOpen(false) } },
    { label: 'Treinamentos', action: () => { onNavigate({ name: 'trainings' }); setMenuOpen(false) } },
    { label: 'Contato', action: () => scrollTo('contato') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-brand-brown' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <button
          onClick={() => { onNavigate({ name: 'landing' }); setMenuOpen(false) }}
          className="flex-shrink-0 focus:outline-none"
        >
          {isDark ? (
            <img src={logoWhite} alt="Morelli Engenharia" className="h-11 object-contain" />
          ) : (
            <img src={logoHorizontal} alt="Morelli Engenharia" className="h-14 object-contain" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={l.action}
              className={`font-josefin text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-brand-teal ${
                isDark ? 'text-white/90' : 'text-brand-gray'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contato')}
            className="font-josefin text-xs tracking-[0.2em] uppercase px-6 py-2.5 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors duration-200"
          >
            Orçamento
          </button>
        </nav>

        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-brand-brown'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-brand-brown'} ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-brand-brown'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-light">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={l.action}
              className="block w-full text-left px-6 py-4 font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray hover:text-brand-teal hover:bg-brand-cream transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => scrollTo('contato')}
              className="w-full bg-brand-teal text-white font-josefin text-xs tracking-[0.2em] uppercase py-3 hover:bg-brand-teal-dark transition-colors"
            >
              Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
