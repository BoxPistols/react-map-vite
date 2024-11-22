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
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  // viteの設定を上書きするが、
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '../src'),
          },
          {
            // StorybookのPreviewで使われるruntime.jsをstorybook/previewから参照するようにする
            find: './sb-preview/runtime.js',
            replacement: path.resolve(
              __dirname,
              '../node_modules/@storybook/preview/dist/runtime.js'
            ),
          },
          {
            find: /^sb-common-assets\/(.*)/,
            replacement: path.resolve(
              __dirname,
              '../node_modules/@storybook/manager/dist/sb-common-assets/$1'
            ),
          },
        ],
      },
    }
  },

  docs: {},

  staticDirs: ['../public'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
