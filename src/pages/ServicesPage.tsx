import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../App'
import { BlogFooter } from './BlogPage'

import higieneImg from '@/imports/higiene.jpg'
import treinamentoImg from '@/imports/treinamento.jpg'
import heroImg from '@/imports/hero-bg.jpg'
import heroSstImg from '@/imports/hero-sst.jpg'
import equipeImg from '@/imports/equipe.jpg'
import saudeImg from '@/imports/saude-ocupacional.png'
import analiseRiscoImg from '@/imports/treinamentos/thumb-apr-analise-risco.png'

interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  items: string[]
  img: string
  article?: { href: string; label: string }
}

const services: Service[] = [
  {
    slug: 'engenharia-seguranca-trabalho',
    title: 'Engenharia de Segurança do Trabalho',
    tagline: 'GRO, PGR, laudos e documentos técnicos',
    description:
      'Vamos agregar à sua empresa com laudos, relatórios e documentos que asseguram atividades seguras e ambiente de trabalho saudável, reduzindo custos com afastamentos, doenças ocupacionais e processos trabalhistas — com envio dos eventos de SST ao eSocial (2210, 2220 e 2240) com agilidade, credibilidade e segurança.',
    items: ['GRO e PGR (NR-1)', 'LTCAT', 'Laudo de Insalubridade (NR-15)', 'Laudo de Periculosidade (NR-16)', 'Análise Ergonômica do Trabalho (NR-17)', 'Laudo NR-12 (máquinas e equipamentos)', 'Laudo Elétrico NR-10', 'Eventos de SST no eSocial'],
    img: heroImg,
    article: { href: '/blog/pgr-por-que-atualizar', label: 'Artigo: por que manter o PGR atualizado' },
  },
  {
    slug: 'higiene-ocupacional',
    title: 'Higiene Ocupacional',
    tagline: 'Antecipar, reconhecer, avaliar e controlar agentes nocivos',
    description:
      'Avaliações quantitativas e qualitativas seguindo os procedimentos e critérios técnicos das NHOs da Fundacentro, com equipamentos calibrados e laudos reconhecidos pelo Ministério do Trabalho — a base para caracterizar insalubridade, compor o PGR e sustentar o LTCAT da sua empresa em São José dos Campos e região.',
    items: ['Ruído ocupacional (NR-15, anexos 1 e 2)', 'Calor / conforto térmico (NR-15, anexo 3)', 'Agentes químicos (NR-15, anexos 11 e 12)', 'Vibração (NR-15, anexos 8 e 9)', 'Levantamento de riscos ambientais (NR-1)', 'Análise de FISPQ', 'Relatório técnico conclusivo com recomendações'],
    img: higieneImg,
    article: { href: '/blog/insalubridade-vs-periculosidade', label: 'Entenda: insalubridade × periculosidade' },
  },
  {
    slug: 'saude-ocupacional',
    title: 'Saúde Ocupacional',
    tagline: 'PCMSO, exames e assessoria médica',
    description:
      'Promovemos ambiente de trabalho com qualidade, protegendo a saúde dos trabalhadores e prevenindo acidentes e doenças por meio da redução das condições de risco — do PCMSO à gestão informatizada dos eventos de saúde no eSocial.',
    items: ['PCMSO (NR-7)', 'Elaboração e acompanhamento de PCA', 'Fonoaudiologia e exames de audiometria', 'Exames clínicos e laboratoriais', 'Assessoria médica ocupacional', 'Gestão de eventos do eSocial'],
    img: saudeImg,
    article: { href: '/blog/pcmso-protecao-saude-do-trabalhador', label: 'Artigo: PCMSO e conformidade legal' },
  },
  {
    slug: 'riscos-psicossociais',
    title: 'Riscos Psicossociais',
    tagline: 'Obrigatório no PGR desde maio de 2026 (NR-1)',
    description:
      'A atualização da NR-1 (Portaria MTE nº 1419/2024) tornou obrigatória a inclusão dos riscos psicossociais no PGR, com prazo final de adequação em 26 de maio de 2026. Realizamos a identificação, avaliação, registro e controle desses riscos com o modelo Demanda-Controle-Suporte e referência à ISO 45003:2021 — reduzindo afastamentos e absenteísmo, melhorando o clima organizacional e mitigando passivos trabalhistas e previdenciários.',
    items: ['Avaliação NR-1 / PGR', 'Questionários validados (Demanda-Controle-Suporte)', 'Classificação e registro dos riscos', 'Plano de ações preventivas', 'Referência ISO 45003:2021', 'Conformidade com o eSocial'],
    img: equipeImg,
    article: { href: '/blog/riscos-psicossociais-nr-1', label: 'Guia completo: riscos psicossociais na NR-1' },
  },
  {
    slug: 'treinamentos-nr',
    title: 'Treinamentos NR',
    tagline: 'EAD e presencial — Universidade Morelli',
    description:
      'A Universidade Morelli Engenharia oferece cursos e treinamentos no formato EAD e presencial, em conformidade com a NR-01 e as exigências de cada norma, com instrutores especializados e certificação documentada para fiscalizações.',
    items: ['CIPA (NR-5)', 'NR-6 EPI', 'NR-10 Elétrica', 'NR-33 Espaço Confinado', 'NR-35 Trabalho em Altura', 'NR-20 Inflamáveis', 'Brigada de Incêndio (NR-23)', 'Primeiros Socorros'],
    img: treinamentoImg,
    article: { href: '/treinamentos', label: 'Ver todos os treinamentos' },
  },
  {
    slug: 'pericia-judicial',
    title: 'Perícia Judicial',
    tagline: 'Assistência técnica em processos trabalhistas',
    description:
      'Assistência técnica em perícias judiciais nos processos de insalubridade, periculosidade, acidente de trabalho e doenças ocupacionais, com apresentação de quesitos iniciais e complementares, relatório técnico e visita técnica a perícia.',
    items: ['Análise da documentação da empresa', 'Quesitos iniciais e complementares', 'Relatório técnico', 'Visita técnica ao local da perícia', 'Acompanhamento da perícia no ambiente de trabalho'],
    img: analiseRiscoImg,
    article: { href: '/blog/insalubridade-vs-periculosidade', label: 'Artigo: caracterização de adicionais' },
  },
  {
    slug: 'gestao-sst',
    title: 'Gestão e Assessoria em SST',
    tagline: 'SESMT terceirizado e documentação em plataforma digital',
    description:
      'Assessoria técnica contínua em Segurança do Trabalho com equipe multidisciplinar — engenheiros, técnicos, higienistas, engenheiro ambiental, médico do trabalho e fonoaudióloga. Toda a gestão dos documentos técnicos é centralizada na plataforma digital SOC, com acesso rápido e seguro às informações da sua empresa.',
    items: ['SESMT Terceirizado (NR-4)', 'CIPA (NR-5)', 'Projetos de implantação e renovação de AVCB', 'Proteção contra incêndio', 'Análise de risco do trabalho', 'Documentos centralizados na plataforma SOC'],
    img: equipeImg,
    article: { href: '/blog/sesmt-terceirizado', label: 'Artigo: SESMT terceirizado' },
  },
  {
    slug: 'meio-ambiente',
    title: 'Meio Ambiente',
    tagline: 'Licenciamento CETESB, IBAMA e gestão de resíduos',
    description:
      'A regularização ambiental é fundamental para empresas que desejam atuar de forma sustentável e responsável. Cuidamos do licenciamento, dos estudos ambientais e da gestão de resíduos, cumprindo as leis e normas ambientais.',
    items: ['Licenciamento ambiental CETESB e IBAMA', 'Ruído limítrofe (NBR 10151)', 'Gerenciamento, caracterização e destinação de resíduos', 'Solicitação de CADRI', 'PGRSS', 'Auditoria e consultoria para certificações ISO', 'Licenças junto à Vigilância Sanitária'],
    img: heroSstImg,
  },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.tagline,
      url: `${SITE_URL}/servicos#${s.slug}`,
      provider: { '@type': 'Organization', name: 'Morelli Engenharia', url: SITE_URL },
      areaServed: 'São José dos Campos, Vale do Paraíba e Litoral Norte - SP',
    },
  })),
}

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Head>
        <title>Serviços de Segurança do Trabalho em São José dos Campos | Morelli Engenharia</title>
        <meta name="description" content="Engenharia de Segurança do Trabalho, higiene ocupacional (NHOs), saúde ocupacional, riscos psicossociais NR-1, treinamentos NR EAD e presenciais, perícia judicial, SESMT terceirizado, meio ambiente e laudos (LTCAT, insalubridade, periculosidade) em São José dos Campos e região." />
        <link rel="canonical" href={`${SITE_URL}/servicos`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serviços de Segurança do Trabalho | Morelli Engenharia" />
        <meta property="og:description" content="Soluções completas em SST: PGR, PCMSO, laudos, treinamentos NR, riscos psicossociais e SESMT terceirizado em São José dos Campos e região." />
        <meta property="og:url" content={`${SITE_URL}/servicos`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serviços de Segurança do Trabalho | Morelli Engenharia" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

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
          <p className="font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Soluções Integradas</p>
          <h1 className="font-josefin text-white font-bold uppercase text-4xl md:text-5xl tracking-[0.06em]">
            Serviços de SST
          </h1>
          <div className="mt-3 w-12 h-1 bg-brand-teal" />
          <p className="mt-6 text-white/60 max-w-2xl leading-relaxed">
            Soluções completas em Segurança, Saúde do Trabalho e Meio Ambiente para empresas de todos os
            portes e segmentos, em São José dos Campos, Vale do Paraíba e Litoral Norte.
          </p>
          {/* Índice rápido */}
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="font-josefin text-[10px] tracking-[0.15em] uppercase text-white/70 border border-white/20 px-3 py-1.5 hover:text-brand-teal hover:border-brand-teal transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Seções de serviço */}
      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`py-20 ${i % 2 === 1 ? 'bg-brand-cream' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              <div className="[direction:ltr]">
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={`Serviço ${s.title} - Morelli Engenharia`}
                    width={640}
                    height={420}
                    className="w-full h-72 md:h-96 object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="[direction:ltr]">
                <p className="font-josefin text-brand-teal text-xs tracking-[0.25em] uppercase mb-3">{s.tagline}</p>
                <h2 className="font-josefin text-brand-brown font-bold uppercase text-2xl md:text-3xl tracking-[0.05em] leading-snug">
                  {s.title}
                </h2>
                <div className="mt-4 w-12 h-1 bg-brand-teal" />
                <p className="mt-6 text-brand-gray leading-relaxed">{s.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-gray text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/551239226658?text=${encodeURIComponent(`Olá. Gostaria de saber mais sobre o serviço de ${s.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-josefin text-xs tracking-[0.2em] uppercase px-6 py-3 bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95 transition-all"
                  >
                    Solicitar Orçamento
                  </a>
                  {s.article && (
                    <Link to={s.article.href} className="font-josefin text-xs tracking-[0.15em] uppercase text-brand-teal hover:text-brand-brown transition-colors">
                      {s.article.label} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <div className="bg-brand-brown py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-josefin text-white font-bold uppercase text-2xl tracking-[0.05em]">
            Não sabe qual solução sua empresa precisa?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Faça um diagnóstico gratuito com nossa equipe. Avaliamos suas obrigações de SST e montamos a proposta certa para o seu porte e segmento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/551239226658?text=Ol%C3%A1.%20Gostaria%20de%20um%20diagn%C3%B3stico%20de%20SST%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#25D366] text-white hover:bg-[#20BD5A] active:scale-95 transition-all"
            >
              Falar no WhatsApp
            </a>
            <Link
              to="/#contato"
              className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white active:scale-95 transition-all text-center"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  )
}
