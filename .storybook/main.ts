import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))',
  ],
  docs: {
    defaultName: 'AutoDocs',
  },
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [require('autoprefixer'), require('tailwindcss')],
    })
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
