import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { articles } from './src/data/articles'

export default defineConfig({
  build: {
    sourcemap: false,
    minify: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  ssgOptions: {
    entry: 'src/main.tsx',
    // Mocka window/document durante o build para componentes com APIs de navegador
    mock: true,
    // Rotas pré-renderizadas (estáticas + dinâmicas do blog + 404)
    includedRoutes: () => [
      '/',
      '/blog',
      ...articles.map((a) => `/blog/${a.slug}`),
      '/treinamentos',
      '/privacidade',
      '/termos',
      '/404',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
