import path from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

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
    options: {},
  },
  typescript: {
    reactDocgen: false,
    check: false,
  },
  docs: {
    defaultName: 'AutoDocs',
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      ...config,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      plugins: [require('autoprefixer'), require('tailwindcss')],
    })
  },
}

export default config
