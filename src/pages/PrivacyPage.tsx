import { AppView } from '../App'

interface Props {
  onNavigate: (v: AppView) => void
}

export default function PrivacyPage({ onNavigate }: Props) {
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
          Política de Privacidade
        </h1>
        <div className="w-12 h-1 bg-brand-teal mb-10" />

        <div className="space-y-6 text-brand-gray leading-relaxed">
          <p className="text-sm text-brand-light">Última atualização: Agosto de 2026</p>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">1. Informações que coletamos</h2>
            <p>Ao entrar em contato conosco pelo formulário do site, coletamos as seguintes informações fornecidas voluntariamente por você: nome, empresa, e-mail, telefone e mensagem.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">2. Como usamos suas informações</h2>
            <p>As informações coletadas são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder às solicitações de orçamento e contato</li>
              <li>Enviar propostas comerciais relacionadas aos nossos serviços</li>
              <li>Comunicação sobre serviços de Engenharia e Segurança do Trabalho</li>
            </ul>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">3. Compartilhamento de dados</h2>
            <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação dos nossos serviços ou quando exigido por lei.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">4. Segurança dos dados</h2>
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">5. Cookies</h2>
            <p>Nosso site pode utilizar cookies para melhorar a experiência do usuário. Você pode configurar seu navegador para recusar cookies, porém isso pode afetar algumas funcionalidades do site.</p>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">6. Seus direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="font-josefin text-brand-brown font-semibold uppercase text-sm tracking-[0.1em] mb-3">7. Contato</h2>
            <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail <a href="mailto:contato@morelliengenharia.com.br" className="text-brand-teal hover:underline">contato@morelliengenharia.com.br</a>.</p>
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
