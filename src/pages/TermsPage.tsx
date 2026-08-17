import { AppView } from '../App'

interface Props {
  onNavigate: (v: AppView) => void
}

export default function TermsPage({ onNavigate }: Props) {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <button
          onClick={() => onNavigate({ name: 'landing' })}
          className="font-josefin text-xs tracking-[0.2em] uppercase text-brand-teal hover:gap-3 active:opacity-50 transition-all mb-10 flex items-center gap-2 cursor-pointer"
        >
          ← Voltar ao site
        </button>

        <h1 className="font-josefin text-brand-brown font-bold uppercase text-3xl tracking-[0.04em] mb-8">
          Termos de Uso
        </h1>
        <div className="w-12 h-1 bg-brand-teal mb-10" />

        <div className="space-y-6 text-brand-gray leading-relaxed">
          <p className="text-sm text-brand-light">Última atualização: Agosto de 2026</p>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">1. Aceitação dos termos</h2>
            <p>Ao acessar e utilizar o site da Morelli Engenharia e Assessoria em Segurança do Trabalho, você concorda com os presentes Termos de Uso. Caso não concorde, solicitamos que não utilize o site.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">2. Serviços</h2>
            <p>A Morelli Engenharia oferece serviços de Engenharia e Segurança do Trabalho, incluindo mas não se limitando a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Higiene Ocupacional</li>
              <li>Treinamentos conforme Normas Regulamentadoras (NRs)</li>
              <li>Laudos Técnicos (Insalubridade, Periculosidade, LTCAT, PPP)</li>
              <li>Gestão em SST (PGR, PCMSO, SESMT Terceirizado)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">3. Conteúdo do site</h2>
            <p>Todo o conteúdo publicado neste site, incluindo textos, imagens, logotipos e materiais informativos, é de propriedade da Morelli Engenharia ou utilizado com autorização. É proibida a reprodução total ou parcial sem prévia autorização por escrito.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">4. Orçamentos e propostas</h2>
            <p>Os orçamentos e propostas comerciais enviados através do formulário de contato ou por outros meios são válidos pelo prazo indicado no documento e estão sujeitos à confirmação de disponibilidade e condições comerciais.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">5. Responsabilidades</h2>
            <p>A Morelli Engenharia se compromete a prestar serviços com qualidade, ética e em conformidade com a legislação vigente. As informações contidas neste site têm caráter informativo e não substituem a consultoria técnica especializada.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">6. Links externos</h2>
            <p>O site pode conter links para sites de terceiros. A Morelli Engenharia não se responsabiliza pelo conteúdo ou pelas práticas de privacidade desses sites externos.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">7. Modificações</h2>
            <p>A Morelli Engenharia reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação no site.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">8. Foro</h2>
            <p>Fica eleito o foro da comarca do domicílio da Morelli Engenharia para dirimir quaisquer dúvidas ou litígios decorrentes destes Termos de Uso.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">9. Contato</h2>
            <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail <a href="mailto:contato@morelliengenharia.com.br" className="text-brand-teal hover:underline">contato@morelliengenharia.com.br</a> ou pelo telefone (12) 3922-6658.</p>
          </section>
        </div>
      </div>

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
    </div>
  )
}
