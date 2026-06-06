import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          emailjs: ['@emailjs/browser'],
          zustand: ['zustand']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    open: true
  }
})
