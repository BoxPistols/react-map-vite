import { hookUseTheme } from '@/hooks/useTheme'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { type ReactNode, useEffect } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvide = ({ children }: ThemeProviderProps) => {
  const { theme, mode } = hookUseTheme()

  useEffect(() => {
    console.log(`Current theme mode: ${mode}`) // 状態確認のために使用
  }, [mode])

  return (
    <CssVarsProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CssVarsProvider>
  )
}
