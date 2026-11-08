import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
    },
  },
  // base: '/nama-repo/',  // aktifkan hanya jika deploy ke GitHub Pages
});
