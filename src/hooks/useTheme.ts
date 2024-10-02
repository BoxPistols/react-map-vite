import { useColorScheme, useMediaQuery } from '@mui/material'
import { useEffect, useMemo } from 'react'

export const useSynchronizedTheme = () => {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const effectiveMode = useMemo(() => {
    if (mode === 'system') {
      return prefersDarkMode ? 'dark' : 'light'
    }
    return mode
  }, [mode, prefersDarkMode])

  useEffect(() => {
    if (effectiveMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [effectiveMode])

  return { mode, setMode, effectiveMode }
}

// import { useColorScheme, useMediaQuery } from '@mui/material'
// import { useEffect, useMemo, useState } from 'react'

// type ThemeMode = 'light' | 'dark' | 'system'
// type ThemeConfig = {
//   allowDarkMode: boolean
//   forcedMode: ThemeMode | null
// }

// const defaultConfig: ThemeConfig = {
//   allowDarkMode: true,
//   forcedMode: null,
// }

// export const useTheme = () => {
//   const { mode, setMode } = useColorScheme()
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
//   const [config, setConfig] = useState<ThemeConfig>(() => {
//     const savedConfig = localStorage.getItem('themeConfig')
//     return savedConfig ? JSON.parse(savedConfig) : defaultConfig
//   })

//   const effectiveMode = useMemo(() => {
//     if (config.forcedMode) return config.forcedMode
//     if (!config.allowDarkMode) return 'light'
//     if (mode === 'system') return prefersDarkMode ? 'dark' : 'light'
//     return mode
//   }, [mode, prefersDarkMode, config])

//   useEffect(() => {
//     localStorage.setItem('themeConfig', JSON.stringify(config))
//     if (effectiveMode === 'dark') {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [effectiveMode, config])

//   const setThemeConfig = (newConfig: Partial<ThemeConfig>) => {
//     setConfig((prev) => ({ ...prev, ...newConfig }))
//   }

//   return { mode, setMode, effectiveMode, config, setThemeConfig }
// }
