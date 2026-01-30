import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Gunakan base absolut ke repo untuk GitHub Pages Project Pages
  // Contoh: https://username.github.io/portfolio/ -> base harus '/portfolio/'
  base: '/portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.docx', '**/*.pdf'],
  css: {
    postcss: './postcss.config.js',
  },
})
