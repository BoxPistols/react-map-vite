import { darkTheme, theme as lightTheme } from '@/theme/theme'
import { useColorScheme, useMediaQuery } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { useEffect, useMemo } from 'react'

export const hookUseTheme = () => {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme: Theme = useMemo(() => {
    const resolvedMode =
      mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode
    return resolvedMode === 'dark' ? darkTheme : lightTheme
  }, [mode, prefersDarkMode])

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme.palette.mode === 'dark'
    )
  }, [theme.palette.mode])

  return { mode, setMode, theme }
}
