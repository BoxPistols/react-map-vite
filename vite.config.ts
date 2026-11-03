// vite.config.ts
import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  const commonConfig: UserConfig = {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      dts({
        insertTypesEntry: true,
        include: ['src'],
        exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }

  const libConfig: UserConfig = {
    ...commonConfig,
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, 'src/index.ts'),
          components: resolve(__dirname, 'src/components/index.ts'),
          theme: resolve(__dirname, 'src/theme/index.ts'),
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) =>
          format === 'es' ? `${entryName}.es.js` : `${entryName}.js`,
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          '@mui/material',
          '@mui/icons-material',
          '@emotion/react',
          '@emotion/styled',
          '@mui/system',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@mui/icons-material': 'MaterialIcons',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled',
            '@mui/system': 'MuiSystem',
          },
        },
      },
      sourcemap: true,
      minify: 'esbuild' as const,
    },
  }

  const appConfig: UserConfig = {
    ...commonConfig,
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
      minify: 'esbuild' as const,
    },
  }

  return isLib ? libConfig : appConfig
})
