const defaultTheme = require('tailwindcss/defaultTheme')

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
        // TODO: 後で設置
        primary: {
          main: '#0e0d6a',
          dark: '#0a094a',
          light: '#7373a9',
          lighter: '#e7e7f0',
        },
        secondary: {
          main: '#696881',
          dark: '#424242',
          light: '#757575',
          lighter: '#FAFAFA',
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
