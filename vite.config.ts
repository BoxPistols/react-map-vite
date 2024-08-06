import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import autoprefixer from 'autoprefixer'
// import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  css: {
    // postcss: { plugins: [tailwindcss, autoprefixer] },
    postcss: './postcss.config.js',
  },
})
