import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // gunakan path relatif agar aman untuk GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.docx', '**/*.pdf'],
  css: {
    postcss: './postcss.config.js',
  },
})
