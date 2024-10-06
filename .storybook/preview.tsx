import createCache from '@emotion/cache'
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import { useGlobals } from '@storybook/preview-api'
import type { Preview } from '@storybook/react'
import React, { useEffect, useMemo } from 'react'
import { darkTheme, theme as lightTheme } from '../src/theme/theme'
import { theme } from '../src/theme/theme'
import '../src/index.css'
import 'maplibre-gl/dist/maplibre-gl.css'

const ThemeSwitcherDecorator = (Story, context) => {
  const [globals, updateGlobals] = useGlobals()
  const currentTheme = globals.theme || 'light'

  const muiTheme = useMemo(() => {
    return currentTheme === 'dark' ? darkTheme : lightTheme
  }, [currentTheme])

  const showThemeSwitcher = context.parameters.showThemeSwitcher ?? false
  const themeSwitcherIconColor =
    context.parameters.themeSwitcherIconColor ?? 'auto'
  const themeSwitcherPosition =
    context.parameters.themeSwitcherPosition ?? 'top-right'

  useEffect(() => {
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

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: newTheme })
  }

  const getIconColor = () => {
    switch (themeSwitcherIconColor) {
      case 'white':
        return '#ffffff'
      case 'black':
        return '#000000'
      default:
        return muiTheme.palette.text.primary
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

  const getThemeIcon = () => {
    switch (currentTheme) {
      case 'light':
        return <Brightness7Icon sx={{ color: iconColor }} />
      case 'dark':
        return <Brightness4Icon sx={{ color: iconColor }} />
      default:
        return <SettingsBrightnessIcon sx={{ color: iconColor }} />
    }
  }

  const cache = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: [],
  })

  return (
    <EmotionThemeProvider theme={muiTheme}>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={cache}>
          <CssBaseline />
          {showThemeSwitcher && (
            <IconButton
              onClick={toggleTheme}
              sx={{
                position: 'fixed',
                zIndex: 10000,
                bgcolor:
                  muiTheme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor:
                    muiTheme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(0,0,0,0.2)',
                },
                ...getPositionStyle(),
              }}>
              {getThemeIcon()}
            </IconButton>
          )}
          <Story {...context} />
        </CacheProvider>
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

// Storybookの起動時にlocalStorageを初期化
if (!localStorage.getItem('mui-mode')) {
  localStorage.setItem('mui-mode', 'light')
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
    themeSwitcherPosition: 'top-right',
  },
  decorators: [ThemeSwitcherDecorator],
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
  },
}

export default preview
