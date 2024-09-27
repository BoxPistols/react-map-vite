import {
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles'
import type { TypographyOptions } from '@mui/material/styles/createTypography'
import { colorData } from './colorToken'
import { typographyComponentsOverrides, typographyOptions } from './typography'

const createPalette = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? colorData : colorData.dark
  return {
    mode,
    ...colors,
    background: {
      ...colors.background,
      default: colors.background.default,
      paper: colors.background.paper,
    },
  }
}

const commonThemeOptions: Omit<ThemeOptions, 'palette' | 'components'> = {
  typography: typographyOptions as TypographyOptions,
  shape: { borderRadius: 2 },
  transitions: {
    easing: { sharp: 'cubic-bezier(0.4, 0, 0.6, 1)' },
    duration: { leavingScreen: 100, enteringScreen: 100 },
  },
  spacing: 4,
  zIndex: { appBar: 1100, drawer: 1000 },
}

const createComponentStyles = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? colorData : colorData.dark
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background.default,
          color: colors.text.primary,
        },
      },
    },
    // Add other component styles
  }
}

const createAppTheme = (mode: 'light' | 'dark'): Theme =>
  createTheme({
    ...commonThemeOptions,
    palette: createPalette(mode),
    components: {
      ...typographyComponentsOverrides,
      ...createComponentStyles(mode),
    },
  })

export const theme = createAppTheme('light')
export const darkTheme = createAppTheme('dark')
