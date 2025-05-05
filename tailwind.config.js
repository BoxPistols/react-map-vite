const defaultTheme = require('tailwindcss/defaultTheme')
const { colorData } = require('./src/themes/colorToken')

// ヘルパー関数
const createColorSet = (colorKey) => ({
  main: colorData[colorKey].main,
  dark: colorData[colorKey].dark,
  light: colorData[colorKey].light,
  lighter: colorData[colorKey].lighter,
})

const createSimpleColorSet = (colorKey) => ({
  ...Object.entries(colorData[colorKey]).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {}),
})

module.exports = {
  darkMode: 'class',
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
        primary: createColorSet('primary'),
        secondary: createColorSet('secondary'),
        error: createColorSet('error'),
        warning: createColorSet('warning'),
        info: createColorSet('info'),
        success: createColorSet('success'),
        text: createSimpleColorSet('text'),
        background: createSimpleColorSet('background'),
        divider: colorData.divider,
        action: createSimpleColorSet('action'),
        common: createSimpleColorSet('common'),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary.main'),
            a: {
              color: theme('colors.primary.main'),
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
