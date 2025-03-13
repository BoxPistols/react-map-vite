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

const createComponentStyles = (
  mode: 'light' | 'dark'
): ThemeOptions['components'] => {
  const colors = mode === 'light' ? colorData : colorData.dark
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background.default,
          color: colors.text.primary,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          color: colors.text.primary,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
        sizeSmall: {
          padding: '0.25em 0.875em',
        },
        contained: {
          '&.MuiButton-contained.MuiButton-root': {
            color: colors.text.white,
          },
          '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
            color: colors.text.primary,
          },
        },
      },
    },
    // Table
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.divider}`,
        },
        head: {
          backgroundColor: colors.background.paper,
          color: colors.text.primary,
          fontWeight: 700,
          letterSpacing: '0.05em',
          padding: '0.5em 1.25em',
        },
        body: {
          color: colors.text.secondary,
          padding: '0.5em 1.25em',
        },
      },
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
export { colorData, typographyOptions }
