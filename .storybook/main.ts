import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
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
  core: {
    builder: '@storybook/builder-vite',
  },
  // async viteFinal(config) {
  //   return mergeConfig(config, {
  //     plugins: [require('autoprefixer'), require('tailwindcss')],
  //   })
  // },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [require('autoprefixer'), require('tailwindcss')],
      resolve: {
        alias: {
          ...config.resolve?.alias,
          'maplibre-gl': 'maplibre-gl/dist/maplibre-gl.js',
        },
      },
      optimizeDeps: {
        include: ['maplibre-gl'],
      },
    })
  },
}

export default config
