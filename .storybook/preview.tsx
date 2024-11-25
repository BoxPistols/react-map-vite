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
import React, { useEffect, useMemo, useState } from 'react'
import { darkTheme, theme as lightTheme } from '../src/theme/theme'
import '../src/index.css'
import 'maplibre-gl/dist/maplibre-gl.css'

const updateLocalStorage = (theme) => {
  localStorage.setItem('mui-mode', theme === 'dark' ? 'dark' : 'light')
}

const ThemeSwitcherDecorator = (Story, context) => {
  const [globals, updateGlobals] = useGlobals()
  const [isDocsPage, setIsDocsPage] = useState(false)

  useEffect(() => {
    const checkIfDocsPage = () => {
      const isDocs = window.location.pathname.includes('/docs/')
      setIsDocsPage(isDocs)

      if (isDocs) {
        updateLocalStorage('light')
        updateGlobals({ theme: 'light' })
      }
    }

    checkIfDocsPage()
    window.addEventListener('popstate', checkIfDocsPage)
    return () => window.removeEventListener('popstate', checkIfDocsPage)
  }, [updateGlobals])

  const currentTheme = isDocsPage ? 'light' : globals.theme || 'light'

  const muiTheme = useMemo(() => {
    return currentTheme === 'dark' ? darkTheme : lightTheme
  }, [currentTheme])

  const showThemeSwitcher = context.parameters.showThemeSwitcher ?? false
  const themeSwitcherIconColor =
    context.parameters.themeSwitcherIconColor ?? 'auto'
  const themeSwitcherPosition =
    context.parameters.themeSwitcherPosition ?? 'top-right'

  useEffect(() => {
    console.log('isDocsPage:', isDocsPage)
    console.log('currentTheme:', currentTheme)
    console.log('globals.theme:', globals.theme)

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
  }, [currentTheme, muiTheme, isDocsPage, globals.theme])

  const toggleTheme = () => {
    if (!isDocsPage) {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      updateGlobals({ theme: newTheme })
    }
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
          {showThemeSwitcher && !isDocsPage && (
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

const preview: Preview = {
  parameters: {
    layout: 'fullscreen', // フルスクリーンレイアウトを強制
    backgrounds: {
      disable: true, // 背景色の制御をThemeProviderに任せる
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // アセットのベースパスを設定
    staticDirs: ['../public'],
    assets: {
      prefix: '.',
    },
    docs: {
      toc: { headingSelector: 'h2, h3' },
      autodocs: false,
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

  tags: ['autodocs'],
}

export default preview
