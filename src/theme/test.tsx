import { colorData } from '@/theme/colorToken'
import {
  typographyComponentsOverrides,
  typographyOptions,
} from '@/theme/typography'
import { type Theme, createTheme } from '@mui/material/styles'
import type { TypographyOptions } from '@mui/material/styles/createTypography'

const commonThemeOptions = {
  typography: typographyOptions as TypographyOptions,
  shape: { borderRadius: 2 },
  transitions: {
    easing: { sharp: 'cubic-bezier(0.4, 0, 0.6, 1)' },
    duration: { leavingScreen: 100, enteringScreen: 100 },
  },
  spacing: 4,
  zIndex: { appBar: 1100, drawer: 1000 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: '6px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
  },
}

// カラースキームを統合
const theme = createTheme({
  ...commonThemeOptions,
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        ...colorData,
        background: {
          ...colorData.background,
          default: colorData.background.default,
          paper: colorData.background.paper,
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        ...colorData.dark,
        background: {
          ...colorData.dark.background,
          default: colorData.dark.background.default,
          paper: colorData.dark.background.paper,
        },
      },
    },
  },
  components: {
    ...typographyComponentsOverrides,
    MuiCssBaseline: {
      styleOverrides: {
        body: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
    },
  },
})

// エクスポート
export { theme }
