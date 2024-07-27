import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import { darkTheme, theme as lightTheme } from '../src/lib/themes/theme'

const ThemeSwitcherDecorator = (Story, context) => {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem('sb-addon-themes')
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'sb-addon-themes',
      theme === lightTheme ? 'light' : 'dark'
    )
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          size='medium'
          variant='contained'
          onClick={toggleTheme}
          style={{ position: 'fixed', top: 10, right: 10 }}>
          Toggle Theme
        </Button>
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
  },
  decorators: [ThemeSwitcherDecorator],
}

export default preview
