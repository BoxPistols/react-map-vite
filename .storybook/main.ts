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
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
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
}

export default config

// import type { StorybookConfig } from '@storybook/react-vite'

// const config: StorybookConfig = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-onboarding',
//     '@storybook/addon-interactions',
//   ],
//   framework: {
//     name: '@storybook/react-vite',
//     options: {},
//   },
//   docs: {
//     autodocs: 'tag',
//   },
//   core: {
//     disableTelemetry: true,
//   },
//   viteFinal: async (config) => {
//     return {
//       ...config,
//       define: {
//         ...config.define,
//         global: 'window',
//       },
//     }
//   },
// }

// export default config
