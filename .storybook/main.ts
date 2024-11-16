// .storybook/main.ts
import path from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { defineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    return defineConfig({
      ...config,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      plugins: [...(config.plugins || [])],
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    })
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: {
        skipPropsWithoutDoc: true,
      },
    },
  },

  docs: {},
}

export default config
