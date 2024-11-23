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
    port: 3000,
    // SPAフォールバックの代替手段
    proxy: {
      // 静的ファイル以外のリクエストをindex.htmlにリダイレクト
      '/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) =>
          path.endsWith('.html') ||
          path.match(/\.(js|css|ico|png|jpg|jpeg|gif|svg)$/)
            ? path
            : '/index.html',
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        // コード分割の設定を追加
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  base: '/',
  mode: process.env.NODE_ENV || 'production',
})
