import { useColorScheme, useMediaQuery } from '@mui/material'
import { useEffect, useMemo } from 'react'

import { darkTheme, lightTheme } from '@/themes/theme'

import type { ThemeMode } from '../types/theme'

/**
 * テーマを管理するフック
 * MUI 6のカラースキーム機能に対応
 */

export const useTheme = (_defaultMode: ThemeMode = 'system') => {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  // メモ化でテーマの再計算を最適化
  const theme = useMemo(() => {
    const resolvedMode =
      mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode
    return resolvedMode === 'dark' ? darkTheme : lightTheme
  }, [mode, prefersDarkMode])

  // 副作用の最適化
  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme.palette.mode === 'dark'
    )
  }, [theme.palette.mode])

  return { mode, setMode, theme }
}

// 後方互換性のためのエイリアス
export const hookUseTheme = useTheme
