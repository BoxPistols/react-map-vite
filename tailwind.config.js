import purgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const purge = purgecss({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purge] : []),
  ],
}
