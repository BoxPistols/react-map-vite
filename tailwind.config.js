const defaultTheme = require('tailwindcss/defaultTheme')
import { colorData } from './src/lib/themes/colorToken'

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.stories.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans JP',
          'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: {
          main: colorData.primary.main,
          dark: colorData.primary.dark,
          light: colorData.primary.light,
          lighter: colorData.primary.lighter,
        },
        secondary: {
          main: colorData.secondary.main,
          dark: colorData.secondary.dark,
          light: colorData.secondary.light,
          lighter: colorData.secondary.lighter,
        },
        error: {
          main: colorData.error.main,
          dark: colorData.error.dark,
          light: colorData.error.light,
          lighter: colorData.error.lighter,
        },
        warning: {
          main: colorData.warning.main,
          dark: colorData.warning.dark,
          light: colorData.warning.light,
          lighter: colorData.warning.lighter,
        },
        info: {
          main: colorData.info.main,
          dark: colorData.info.dark,
          light: colorData.info.light,
          lighter: colorData.info.lighter,
        },
        success: {
          main: colorData.success.main,
          dark: colorData.success.dark,
          light: colorData.success.light,
          lighter: colorData.success.lighter,
        },
        text: {
          primary: colorData.text.primary,
          secondary: colorData.text.secondary,
          disabled: colorData.text.disabled,
          hint: colorData.text.hint,
        },
        background: {
          paper: colorData.background.paper,
          default: colorData.background.default,
        },
        divider: colorData.divider,
        action: {
          active: colorData.action.active,
          hover: colorData.action.hover,
          selected: colorData.action.selected,
          disabled: colorData.action.disabled,
          disabledBackground: colorData.action.disabledBackground,
        },
        common: {
          black: colorData.common.black,
          white: colorData.common.white,
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.priimary.main'),
            a: {
              color: theme('colors.priimary.main'),
              '&:hover': {
                color: theme('colors.primary.light'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
