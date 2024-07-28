import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React, { useState, useEffect, useCallback } from 'react'
import { darkTheme, theme as lightTheme } from '../src/lib/themes/theme'

// グローバルタイプを拡張
declare global {
  interface StorybookParameters {
    showThemeSwitcher?: boolean
    themeSwitcherIconColor?: 'white' | 'black' | 'auto'
  }
}

const ThemeSwitcherDecorator = (Story, context) => {
  const [theme, setTheme] = useState(lightTheme)
  const showThemeSwitcher = context.parameters.showThemeSwitcher ?? false
  const themeSwitcherIconColor =
    context.parameters.themeSwitcherIconColor ?? 'auto'

  useEffect(() => {
    const savedTheme = localStorage.getItem('sb-addon-themes')
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'sb-addon-themes',
      theme.palette.mode === 'dark' ? 'dark' : 'light'
    )
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

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {showThemeSwitcher && (
          <IconButton
            onClick={toggleTheme}
            sx={{
              position: 'fixed',
              top: 10,
              right: 10,
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
            }}>
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon sx={{ color: iconColor }} />
            ) : (
              <Brightness4Icon sx={{ color: iconColor }} />
            )}
          </IconButton>
        )}
        <Story {...context} />
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
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
    // デフォルトのテーマ切り替えアイコン設定
    showThemeSwitcher: false,
    themeSwitcherIconColor: 'default',
  },
  decorators: [ThemeSwitcherDecorator],
}

export default preview
