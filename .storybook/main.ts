import path from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },

  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      build: {
        sourcemap: true,
        chunkSizeWarningLimit: 1600,
      },
      optimizeDeps: {
        include: ['@emotion/react', '@emotion/styled', '@mui/material'],
      },
    }
  },

  typescript: {
    reactDocgen: 'react-docgen',
    check: false,
  },

  staticDirs: ['../public'],
}

export default config
