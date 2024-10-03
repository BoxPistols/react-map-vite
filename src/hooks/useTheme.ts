import { darkTheme, theme as lightTheme } from '@/theme/theme'
import { useColorScheme, useMediaQuery } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

type ThemeConfig = {
  allowDarkMode: boolean
}

const defaultConfig: ThemeConfig = {
  allowDarkMode: false,
}

const getInitialConfig = (): ThemeConfig => {
  const savedConfig = localStorage.getItem('themeConfig')
  return savedConfig ? JSON.parse(savedConfig) : defaultConfig
}

export const hookUseTheme = () => {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [config, setConfig] = useState<ThemeConfig>(getInitialConfig)

  const effectiveMode = useMemo(() => {
    if (!config.allowDarkMode) return 'light'
    if (mode === 'system') return prefersDarkMode ? 'dark' : 'light'
    return mode
  }, [mode, prefersDarkMode, config.allowDarkMode])

  const theme = useMemo(() => {
    return effectiveMode === 'dark' ? darkTheme : lightTheme
  }, [effectiveMode])

  useEffect(() => {
    localStorage.setItem('themeConfig', JSON.stringify(config))
    document.documentElement.classList.toggle('dark', effectiveMode === 'dark')
  }, [effectiveMode, config])

  const setThemeConfig = (newConfig: Partial<ThemeConfig>) => {
    setConfig((prev) => {
      const updatedConfig = { ...prev, ...newConfig }
      if (!updatedConfig.allowDarkMode && mode !== 'light') {
        setMode('light')
      }
      return updatedConfig
    })
  }

  return { mode, setMode, effectiveMode, config, setThemeConfig, theme }
}
