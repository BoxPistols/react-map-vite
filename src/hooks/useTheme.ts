import { darkTheme, theme as lightTheme } from '@/theme/theme'
import { useColorScheme, useMediaQuery } from '@mui/material'
import { useEffect, useMemo } from 'react'

export const hookUseTheme = () => {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const effectiveMode = useMemo(() => {
    if (mode === 'system') return prefersDarkMode ? 'dark' : 'light'
    return mode
  }, [mode, prefersDarkMode])

  const theme = useMemo(() => {
    return effectiveMode === 'dark' ? darkTheme : lightTheme
  }, [effectiveMode])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', effectiveMode === 'dark')
  }, [effectiveMode])

  return { mode, setMode, effectiveMode, theme }
}
