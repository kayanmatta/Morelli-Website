import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

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

  const scrollLink = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo(id)
  }

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0 })
  }

  const links = [
    { label: 'Início', href: '/', onClick: goHome },
    { label: 'Sobre', href: '/#sobre', onClick: scrollLink('sobre') },
    { label: 'Serviços', href: '/#servicos', onClick: scrollLink('servicos') },
    { label: 'Blog', href: '/blog', onClick: () => setMenuOpen(false) },
    { label: 'Treinamentos', href: '/treinamentos', onClick: () => setMenuOpen(false) },
    { label: 'Contato', href: '/#contato', onClick: scrollLink('contato') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-brand-brown' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          to="/"
          onClick={goHome}
          className="flex-shrink-0 focus:outline-none"
        >
          {isDark ? (
            <img src={logoWhite} alt="Morelli Engenharia" width={180} height={44} className="h-11 object-contain" />
          ) : (
            <img src={logoHorizontal} alt="Morelli Engenharia" width={200} height={56} className="h-14 object-contain" />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={l.onClick as React.MouseEventHandler<HTMLAnchorElement>}
              className={`font-josefin text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-brand-teal active:text-brand-teal-dark cursor-pointer ${
                isDark ? 'text-white/90' : 'text-brand-gray'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contato"
            onClick={scrollLink('contato')}
            className="font-josefin text-xs tracking-[0.2em] uppercase px-6 py-2.5 bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Orçamento
          </Link>
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
            <Link
              key={l.label}
              to={l.href}
              onClick={l.onClick as React.MouseEventHandler<HTMLAnchorElement>}
              className="block w-full text-left px-6 py-4 font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray hover:text-brand-teal hover:bg-brand-cream active:bg-brand-cream/50 transition-colors cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              to="/#contato"
              onClick={scrollLink('contato')}
              className="w-full bg-brand-teal text-white font-josefin text-xs tracking-[0.2em] uppercase py-3 hover:bg-brand-teal-dark active:scale-95 transition-all cursor-pointer block text-center"
            >
              Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
