import purgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const purge = purgecss({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

export default {
  theme: {
    extend: {
      colors: {
        // primary: {
        // },
      },
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purge] : []),
  ],
  important: true, // MUIのスタイルを上書きするために必要
}
