import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: './', // Garante que o Electron encontre os arquivos JS/CSS no build
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    strictPort: true,
  }
})