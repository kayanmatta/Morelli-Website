import { useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
      <Head>
        <title>Página não encontrada | Morelli Engenharia</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="text-center px-8 py-24">
        <p className="font-josefin text-brand-teal text-xs tracking-[0.3em] uppercase mb-4">Erro 404</p>
        <h1 className="font-josefin text-brand-brown font-bold uppercase text-4xl md:text-5xl tracking-[0.06em]">
          Página não encontrada
        </h1>
        <div className="mt-4 w-12 h-1 bg-brand-teal mx-auto" />
        <p className="mt-6 text-brand-gray max-w-md mx-auto leading-relaxed">
          O endereço que você tentou acessar não existe ou foi movido. Volte para a home e encontre nossos serviços de Segurança e Saúde do Trabalho.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95 transition-all cursor-pointer"
          >
            Voltar à home
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="font-josefin text-xs tracking-[0.2em] uppercase px-8 py-4 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white active:scale-95 transition-all cursor-pointer"
          >
            Ver o blog
          </button>
        </div>
      </div>
    </div>
  )
}
