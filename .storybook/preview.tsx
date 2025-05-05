import createCache from '@emotion/cache'
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { useGlobals } from '@storybook/preview-api'
import { useEffect, useMemo } from 'react'

import { darkTheme, theme as lightTheme } from '../src/themes/theme'

import type { Preview, StoryContext, StoryFn } from '@storybook/react' // Import required types
import '../src/index.css'
import 'maplibre-gl/dist/maplibre-gl.css'

// MUIのローカルストレージキーを統一
const updateLocalStorage = (theme: string) => {
  // mui-modeのみを使用し、mui-color-schemeは削除
  localStorage.setItem('mui-mode', theme === 'dark' ? 'dark' : 'light')

  // 競合するキーを削除
  localStorage.removeItem('mui-color-scheme-dark')
  localStorage.removeItem('mui-color-scheme-light')
}

const Decorator = (Story: StoryFn, context: StoryContext) => {
  // Updated with correct Storybook types
  const [globals] = useGlobals()
  const currentTheme = globals.theme || 'light'
  const currentPadding = globals.padding || 'standard'

  const muiTheme = useMemo(() => {
    return currentTheme === 'dark' ? darkTheme : lightTheme
  }, [currentTheme])

  useEffect(() => {
    updateLocalStorage(currentTheme)

    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const root = document.getElementById('root')
    if (root) {
      root.style.backgroundColor = muiTheme.palette.background.default
    }
  }, [currentTheme, muiTheme])

  const cache = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: [],
  })

  // パディング制御のロジック
  const isFullscreen = context.viewMode === 'story'
  const noPadding =
    context.parameters.noPadding ||
    (isFullscreen && context.parameters.fullscreenNoPadding) ||
    currentPadding === 'none'

  return (
    <EmotionThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={cache}>
          <CssBaseline />
          <Box sx={{ p: noPadding ? 0 : 4 }}>
            <Story />
          </Box>
        </CacheProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    staticDirs: ['../public'],
    assets: {
      prefix: '.',
    },
    docs: {
      toc: { headingSelector: 'h2, h3' },
      autodocs: false,
    },
  },

  decorators: [Decorator],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    padding: {
      name: 'パディング',
      description: 'コンテンツ周囲のパディング',
      defaultValue: 'standard',
      toolbar: {
        icon: 'box',
        items: [
          { value: 'none', title: 'パディングなし' },
          { value: 'standard', title: '標準パディング' },
        ],
      },
    },
  },
}

export default preview
export { Decorator }
