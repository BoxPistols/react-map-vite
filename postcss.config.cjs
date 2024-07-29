module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,mdx}',
        './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
}
