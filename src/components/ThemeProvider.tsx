import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

import { useTheme } from '../hooks/useTheme'

import type { ThemeMode } from '../types/theme'

export interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}
/**
 * MUI 6に対応したテーマプロバイダー
 */
export const ThemeProvider = ({
  children,
  defaultMode = 'light', // デフォルトのテーマはsystemでも良い
}: ThemeProviderProps) => {
  const { theme, mode } = useTheme(defaultMode)

  useEffect(() => {
    console.log(`Current theme mode: ${mode}`) // 状態確認のために使用
  }, [mode])

  return (
    <CssVarsProvider theme={theme} defaultMode={defaultMode}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}
