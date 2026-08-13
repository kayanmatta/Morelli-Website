import { useRef, useEffect, useState } from 'react'
import { AppView } from '../App'
import { articles } from '../data/articles'

import heroImg from '@/imports/ChatGPT_Image_10_de_ago._de_2026__16_57_31.png'
import equipeImg from '@/imports/equipe.jpg'
import higieneImg from '@/imports/higiene.jpg'
import treinamentoImg from '@/imports/treinamento.jpg'
import heroSstImg from '@/imports/hero-sst.jpg'
import jeanEdgarImg from '@/imports/Jeane&Edgar.jpg'
import logoWhite from '@/imports/Logo_sem_fundo.png'

const imgMap: Record<string, string> = {
  hero: heroSstImg,
  equipe: equipeImg,
  higiene: higieneImg,
  treinamento: treinamentoImg,
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.querySelectorAll('.fup').forEach((x) => x.classList.add('vis'))
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let cur = 0
    const step = target / 60
    const t = setInterval(() => {
      cur += step
      if (cur >= target) { setVal(target); clearInterval(t) }
      else setVal(Math.floor(cur))
    }, 16)
    return () => clearInterval(t)
  }, [target, active])
  return val
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCounter(value, active)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref}>
      <div className="font-josefin font-bold text-white leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {suffix}{count}
      </div>
      <div className="mt-1 text-white/80 text-xs leading-snug whitespace-pre-line">{label}</div>
    </div>
  )
}

interface Props {
  onBlogNav: () => void
  onArticleClick: (id: number) => void
}

export default function LandingPage({ onBlogNav, onArticleClick }: Props) {
  const [formData, setFormData] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll('.fup').forEach((x) => x.classList.add('vis'))
    }, 80)
    return () => clearTimeout(t)
  }, [])

  const sobreRef = useReveal()
  const servicosRef = useReveal()
  const difRef = useReveal()
  const blogRef = useReveal()
  const contatoRef = useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Orçamento - ${formData.nome || 'Novo contato'}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmpresa: ${formData.empresa}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem:\n${formData.mensagem}`
    )
    window.open(`mailto:contato@morelliengenharia.com.br?subject=${subject}&body=${body}`, '_blank')
    setSent(true)
  }

  const services = [
    {
      title: 'Higiene Ocupacional',
      description: 'Avaliação quantitativa e qualitativa de agentes físicos, químicos e biológicos com emissão de laudos técnicos reconhecidos.',
      items: ['Medição de ruído e vibração', 'Avaliação de agentes químicos', 'Análise de iluminação', 'Avaliação de calor e frio'],
      img: higieneImg,
    },
    {
      title: 'Treinamentos NR',
      description: 'Capacitações obrigatórias conforme as Normas Regulamentadoras, ministradas por profissionais habilitados e com emissão de certificados.',
      items: ['NR-6 EPI', 'NR-10 Elétrica', 'NR-35 Altura', 'NR-33 Espaço Confinado'],
      img: treinamentoImg,
    },
    {
      title: 'Laudos Técnicos',
      description: 'Elaboração de laudos de insalubridade, periculosidade, LTCAT, PPP e demais documentos exigidos pela legislação trabalhista.',
      items: ['Laudo de Insalubridade', 'Laudo de Periculosidade', 'LTCAT', 'PPP'],
      img: heroImg,
    },
    {
      title: 'Gestão em SST',
      description: 'Assessoria completa em Segurança e Saúde do Trabalho, da elaboração do PGR/PCMSO ao SESMT terceirizado.',
      items: ['PGR / PPRA', 'PCMSO', 'SESMT Terceirizado', 'Consultoria em NRs'],
      img: heroSstImg,
    },
  ]

  const diferenciais = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'Profissionais Certificados',
      desc: 'Equipe de engenheiros e técnicos com registros ativos no CREA e certificações reconhecidas pelo MTE.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: 'Atendimento Personalizado',
      desc: 'Cada empresa recebe uma solução sob medida, considerando porte, setor e necessidades específicas.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: 'Compliance Garantido',
      desc: 'Documentação sempre atualizada conforme as NRs vigentes, reduzindo riscos de autuações e passivos trabalhistas.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      title: 'Suporte Contínuo',
      desc: 'Acompanhamento permanente e suporte técnico para dúvidas e atualizações durante todo o contrato.',
    },
  ]

  const previewArticles = articles.slice(0, 3)

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <img
          src={heroImg}
          alt="Engenheiros em obra ao pôr do sol"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(20,14,10,0.85) 0%, rgba(20,14,10,0.65) 55%, rgba(20,14,10,0.3) 100%)',
          }}
        />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-8 w-full py-20">
          <div className="max-w-xl">
            <p className="fup font-josefin font-bold text-brand-teal text-xs tracking-[0.28em] uppercase mb-6">
              Engenharia e Segurança do Trabalho
            </p>
            <h1 className="fup d1 font-josefin text-white font-bold leading-[1.08]" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)' }}>
              Sua empresa<br />
              <span className="text-brand-teal">segura</span> para<br />
              crescer.
            </h1>
            <div className="fup d2 mt-6 w-14 h-1 bg-brand-teal" />
            <p className="fup d2 mt-6 text-white/80 text-base leading-relaxed max-w-sm">
              Cuidamos da segurança, da conformidade e da gestão dos riscos para que você
              possa focar no que realmente importa: o seu negócio.
            </p>
            <div className="fup d3 mt-10">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-brand-teal text-white font-josefin text-sm tracking-wider px-8 py-4 hover:bg-brand-teal-dark transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-brand-teal py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: 10, suffix: '+', label: 'anos de\nexperiência' },
              { value: 500, suffix: '+', label: 'empresas\nassessoradas' },
              { value: 2000, suffix: '+', label: 'treinamentos\nrealizados' },
              { value: 1500, suffix: '+', label: 'laudos\nemitidos' },
            ].map((s, i) => (
              <div key={i} className={`text-center px-4 py-2 ${i > 0 ? 'border-l border-white/30' : ''}`}>
                <StatItem value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ────────────────────────────────────────────────────── */}
      <section id="sobre" className="py-24 bg-white">
        <div ref={sobreRef} className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="fup font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">
                Quem somos
              </p>
              <h2 className="fup d1 font-josefin font-bold uppercase leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '0.04em' }}>
                <span className="text-brand-brown">Segurança do Trabalho</span><br />
                <span className="text-brand-teal">como prioridade</span>
              </h2>
              <div className="fup d1 mt-4 w-12 h-1 bg-brand-brown" />
              <p className="fup d2 mt-7 text-brand-gray leading-relaxed">
                A <strong className="text-brand-brown">Morelli Engenharia e Assessoria</strong> é especializada em Engenharia e Segurança
                do Trabalho, atuando com comprometimento e ética na proteção da saúde e integridade
                dos colaboradores, alinhando segurança e conformidade para as empresas que assessoramos.
              </p>
              <p className="fup d3 mt-4 text-brand-gray leading-relaxed">
                Com ampla experiência de atuação, atendemos empresas dos mais variados segmentos
                — indústria, comércio e prestação de serviços. Oferecemos soluções personalizadas,
                auditorias técnicas, laudos periciais e suporte contínuo para garantir que sua empresa
                opere com risco controlado e em plena conformidade com as Normas Regulamentadoras (NRs).
              </p>
              <div className="fup d3 mt-8 flex flex-wrap gap-3">
                {['CREA Habilitado', 'NR Certificadas', 'Documentação Completa', 'Suporte Contínuo'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 border border-brand-gray/30 text-brand-gray font-josefin text-xs tracking-[0.15em] uppercase px-3 py-1.5"
                  >
                    <span className="text-brand-teal">•</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="fup d2 p-3 border-2 border-brand-teal rounded-2xl">
              <img
                src={jeanEdgarImg}
                alt="Jeane e Edgar Morelli — sócios da Morelli Engenharia"
                width={600}
                height={520}
                className="w-full object-cover object-top max-h-[520px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ─────────────────────────────────────────────────── */}
      <section id="servicos" className="py-28 bg-brand-cream">
        <div ref={servicosRef} className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="fup font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">O que fazemos</p>
            <h2 className="fup d1 font-josefin text-brand-brown font-bold uppercase text-4xl tracking-[0.06em]">
              Nossos Serviços
            </h2>
            <div className="fup d1 mx-auto mt-3 w-12 h-1 bg-brand-teal" />
            <p className="fup d2 mt-6 text-brand-gray max-w-xl mx-auto leading-relaxed">
              Soluções completas em Segurança e Saúde do Trabalho para empresas de todos
              os portes e segmentos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fup d${i + 1} group relative overflow-hidden cursor-pointer h-[420px]`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/95 via-brand-brown/60 to-brand-brown/10 transition-all duration-300 group-hover:via-brand-brown/75" />

                {/* Teal left border reveal */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-teal scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-josefin text-white font-semibold uppercase text-base tracking-[0.1em] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
                    {s.description}
                  </p>
                  <ul className="mt-3 space-y-1 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 delay-75">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-brand-teal text-xs font-josefin tracking-wider">
                        <span className="w-1 h-1 bg-brand-teal rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-4 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-4 py-2 hover:bg-brand-teal hover:text-white transition-all duration-200 w-fit opacity-0 group-hover:opacity-100"
                  >
                    Solicitar →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ─────────────────────────────────────────────── */}
      <section className="py-28 bg-brand-brown relative overflow-hidden">
        {/* Background geometric watermark */}
        <div
          className="absolute right-0 top-0 w-96 h-96 opacity-5"
          style={{
            background: 'linear-gradient(135deg, #02b5a5 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute -left-20 bottom-0 w-80 h-80 border border-brand-teal/10"
          style={{ transform: 'rotate(30deg)' }}
        />

        <div ref={difRef} className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="fup font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">
              Por que nos escolher
            </p>
            <h2 className="fup d1 font-josefin text-white font-bold uppercase text-4xl tracking-[0.06em]">
              A Diferença Morelli
            </h2>
            <div className="fup d1 mx-auto mt-3 w-12 h-1 bg-brand-teal" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d, i) => (
              <div key={d.title} className={`fup d${i + 1} group`}>
                <div className="text-brand-teal mb-5 transition-transform duration-300 group-hover:-translate-y-1">
                  {d.icon}
                </div>
                <h3 className="font-josefin text-white font-semibold uppercase text-sm tracking-[0.12em] leading-snug mb-3">
                  {d.title}
                </h3>
                <div className="w-8 h-px bg-brand-teal/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-teal" />
                <p className="text-white/70 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="fup mt-20 border-t border-white/10 pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-josefin text-white text-2xl uppercase font-semibold tracking-wide">
                  Pronto para garantir a segurança da sua empresa?
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Entre em contato e receba uma análise gratuita das necessidades de SST
                  da sua empresa, sem compromisso.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
                >
                  Fale Conosco
                </button>
                <a
                  href="tel:+551239295154"
                  className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white/30 text-white hover:border-brand-teal hover:text-brand-teal transition-all"
                >
                  (12) 3929-5154
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────────── */}
      <section id="blog" className="py-28 bg-white">
        <div ref={blogRef} className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="fup font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Conhecimento</p>
              <h2 className="fup d1 font-josefin text-brand-brown font-bold uppercase text-4xl tracking-[0.06em]">
                Blog e Artigos
              </h2>
              <div className="fup d1 mt-3 w-12 h-1 bg-brand-teal" />
            </div>
            <button
              onClick={onBlogNav}
              className="fup font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-6 py-3 hover:bg-brand-teal hover:text-white transition-all"
            >
              Ver todos os artigos →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {previewArticles.map((art, i) => (
              <article
                key={art.id}
                className={`fup d${i + 1} group cursor-pointer`}
                onClick={() => onArticleClick(art.id)}
              >
                <div className="overflow-hidden mb-5">
                  <img
                    src={imgMap[art.imageKey]}
                    alt={art.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-josefin text-[10px] tracking-[0.2em] uppercase text-white bg-brand-teal px-2.5 py-1">
                    {art.category}
                  </span>
                  <span className="text-brand-light text-xs">{art.readTime} leitura</span>
                </div>
                <h3 className="font-josefin text-brand-brown font-semibold text-base uppercase tracking-wide leading-snug group-hover:text-brand-teal transition-colors">
                  {art.title}
                </h3>
                <p className="mt-3 text-brand-gray text-sm leading-relaxed line-clamp-3">{art.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-brand-teal font-josefin text-xs tracking-[0.15em] uppercase">
                  <span>Ler artigo</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-light/50 font-josefin text-xs text-brand-light tracking-wider">
                  {art.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ──────────────────────────────────────────────────── */}
      <section id="contato" className="py-28 bg-brand-cream">
        <div ref={contatoRef} className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left info */}
            <div>
              <p className="fup font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Fale conosco</p>
              <h2 className="fup d1 font-josefin text-brand-brown font-bold uppercase text-4xl leading-tight tracking-[0.06em]">
                Solicite seu<br />
                <span className="text-brand-teal">orçamento</span>
              </h2>
              <div className="fup d1 mt-3 w-12 h-1 bg-brand-teal" />
              <p className="fup d2 mt-8 text-brand-gray leading-relaxed">
                Conte com a Morelli Engenharia para manter sua empresa em conformidade
                com a legislação de segurança do trabalho. Nossa equipe está pronta para
                atendê-lo.
              </p>

              <div className="fup d2 mt-10 space-y-6">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: 'Telefone',
                    value: '(12) 3929-5154',
                    href: 'tel:+551239295154',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    ),
                    label: 'Celular',
                    value: '(12) 99764-4911',
                    href: 'tel:+5512997644911',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: 'E-mail',
                    value: 'contato@morelliengenharia.com.br',
                    href: 'mailto:contato@morelliengenharia.com.br',
                  },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-teal/10 flex items-center justify-center flex-shrink-0 text-brand-teal">
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-josefin text-xs tracking-[0.2em] uppercase text-brand-light mb-0.5">
                        {c.label}
                      </div>
                      <a href={c.href} className="text-brand-brown hover:text-brand-teal transition-colors text-sm">
                        {c.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right form */}
            <div className="fup d2">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-brand-teal/20 bg-white">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#02b5a5" strokeWidth="2" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-josefin text-brand-brown font-semibold uppercase tracking-wide text-lg">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-3 text-brand-gray text-sm leading-relaxed">
                    Obrigado pelo contato. Nossa equipe retornará em breve.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal border border-brand-teal px-6 py-2.5 hover:bg-brand-teal hover:text-white transition-all"
                  >
                    Nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors bg-white text-brand-brown"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray mb-2">Empresa</label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors bg-white text-brand-brown"
                        placeholder="Sua empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors bg-white text-brand-brown"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                  <div>
                    <label className="block font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors bg-white text-brand-brown"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block font-josefin text-xs tracking-[0.2em] uppercase text-brand-gray mb-2">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full border border-brand-light px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-colors bg-white text-brand-brown resize-none"
                      placeholder="Descreva brevemente sua necessidade..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-josefin text-xs tracking-[0.25em] uppercase bg-brand-brown text-white py-4 hover:bg-brand-teal transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-brand-brown py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            <div>
              <img src={logoWhite} alt="Morelli Engenharia" className="h-14 mb-5 object-contain opacity-90" />
              <p className="text-white/60 text-sm leading-relaxed">
                Engenharia e Assessoria em Segurança do Trabalho com excelência,
                ética e comprometimento.
              </p>
            </div>

            <div>
              <h4 className="font-josefin text-white text-xs tracking-[0.3em] uppercase mb-5">Serviços</h4>
              <ul className="space-y-3">
                {['Higiene Ocupacional', 'Treinamentos NR', 'Laudos Técnicos', 'Gestão em SST', 'SESMT Terceirizado'].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white/60 text-sm hover:text-brand-teal transition-colors"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-josefin text-white text-xs tracking-[0.3em] uppercase mb-5">Contato</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p>Jeane Morelli</p>
                <p>Engenheira de Segurança do Trabalho</p>
                <a href="tel:+551239295154" className="block hover:text-brand-teal transition-colors">(12) 3929-5154</a>
                <a href="tel:+5512997644911" className="block hover:text-brand-teal transition-colors">(12) 99764-4911</a>
                <a href="mailto:contato@morelliengenharia.com.br" className="block hover:text-brand-teal transition-colors break-all">
                  contato@morelliengenharia.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-josefin text-white/50 text-xs tracking-[0.15em] uppercase">
              © 2025-2026 Morelli Engenharia e Assessoria em Segurança do Trabalho
            </p>
            <div className="flex gap-6">
              {['Política de Privacidade', 'Termos de Uso'].map((l) => (
                <button key={l} className="font-josefin text-white/50 text-xs tracking-[0.1em] hover:text-brand-teal transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
