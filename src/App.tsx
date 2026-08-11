import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import BlogPage from './pages/BlogPage'

export type AppView =
  | { name: 'landing' }
  | { name: 'blog' }
  | { name: 'article'; id: number }

export default function App() {
  const [view, setView] = useState<AppView>({ name: 'landing' })

  const navigate = (v: AppView) => {
    setView(v)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar view={view} onNavigate={navigate} />
      {view.name === 'landing' && (
        <LandingPage
          onBlogNav={() => navigate({ name: 'blog' })}
          onArticleClick={(id) => navigate({ name: 'article', id })}
        />
      )}
      {(view.name === 'blog' || view.name === 'article') && (
        <BlogPage view={view} onNavigate={navigate} />
      )}
    </div>
  )
}
