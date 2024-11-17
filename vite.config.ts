import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
    // historyApiFallbackを追加
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    // SPAのための設定を追加
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // ソースマップを生成（デバッグ用、必要に応じて）
    sourcemap: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
  // ベースURLの設定（必要に応じて）
  base: '/',
})
