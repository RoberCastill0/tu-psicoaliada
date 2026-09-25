import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // "./" permite abrir el build desde cualquier carpeta o subruta (Netlify, Vercel, GitHub Pages).
  base: './',
})
