import createCache from '@emotion/cache'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React, { useState, useEffect, useCallback } from 'react'
import { darkTheme, theme as lightTheme } from '../src/lib/themes/theme'
import '../src/index.css' // Tailwind CSSのインポート
import 'maplibre-gl/dist/maplibre-gl.css'

declare global {
  interface StorybookParameters {
    showThemeSwitcher?: boolean
    themeSwitcherIconColor?: 'white' | 'black' | 'auto'
    themeSwitcherPosition?:
      | 'top-right'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-left'
  }
}

const ThemeSwitcherDecorator = (Story, context) => {
  const [theme, setTheme] = useState(lightTheme)
  const showThemeSwitcher = context.parameters.showThemeSwitcher ?? false
  const themeSwitcherIconColor =
    context.parameters.themeSwitcherIconColor ?? 'auto'
  const themeSwitcherPosition =
    context.parameters.themeSwitcherPosition ?? 'top-right'

  useEffect(() => {
    const savedTheme = localStorage.getItem('sb-addon-themes')
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme)
    }
  }, [])

  useEffect(() => {
    const isDark = theme.palette.mode === 'dark'
    localStorage.setItem('sb-addon-themes', isDark ? 'dark' : 'light')

    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    const root = document.getElementById('root')
    if (root) {
      root.style.backgroundColor = isDark ? '#333333' : '#ffffff'
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === 'light' ? darkTheme : lightTheme
    )
  }, [])

  const getIconColor = () => {
    switch (themeSwitcherIconColor) {
      case 'white':
        return '#ffffff'
      case 'black':
        return '#000000'
      default:
        return theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
    }
  }

  const iconColor = getIconColor()

  const getPositionStyle = () => {
    switch (themeSwitcherPosition) {
      case 'top-left':
        return { top: 10, left: 10 }
      case 'top-right':
        return { top: 10, right: 10 }
      case 'bottom-left':
        return { bottom: 10, left: 10 }
      case 'bottom-right':
        return { bottom: 10, right: 10 }
      default:
        return { top: 10, right: 10 }
    }
  }

  const cache = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: [],
  })

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <CssBaseline />
          {showThemeSwitcher && (
            <IconButton
              onClick={toggleTheme}
              sx={{
                position: 'fixed',
                zIndex: 10000,
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(0,0,0,0.2)',
                },
                ...getPositionStyle(),
              }}>
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon sx={{ color: iconColor }} />
              ) : (
                <Brightness4Icon sx={{ color: iconColor }} />
              )}
            </IconButton>
          )}
          <Story {...context} />
        </CacheProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: { headingSelector: 'h2, h3' },
    },
    backgrounds: {
      disable: true,
    },
    showThemeSwitcher: true,
    themeSwitcherIconColor: 'auto',
    themeSwitcherPosition: 'top-right', // デフォルト位置
  },

  decorators: [ThemeSwitcherDecorator],
  tags: ['autodocs', 'autodocs'],
}

export default preview

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}
