import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base must match the GitHub Pages repo path: https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: '/smartai-landing/',
})

