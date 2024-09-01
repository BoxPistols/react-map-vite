import {
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles'
import type { TypographyOptions } from '@mui/material/styles/createTypography'
import { colorData, getGrey } from './colorToken'
import { typographyComponentsOverrides, typographyOptions } from './typography'

// 型定義は変更なし

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

// theme.ts
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
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          position: 'static',
          transform: 'none',
          transition: 'none',
          pointerEvents: 'auto',
          cursor: 'pointer',
          display: 'inline',
          alignSelf: 'start',
          fontWeight: 'bold',
          fontSize: '0.875rem',
          lineHeight: 1.75,
          color: colors.text.primary,
          '&.Mui-focused': {
            color: colors.text.primary,
          },
          '&.MuiInputLabel-sizeSmall': {
            fontSize: '0.75rem',
            lineHeight: 1.5,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: 0,
          '&.MuiInputBase-sizeSmall': {
            fontSize: '0.875rem',
          },
        },
        input: {
          paddingTop: '10px',
          paddingBottom: '8px',
          height: 'auto',
          '&.MuiInputBase-inputSizeSmall': {
            paddingTop: '8px',
            paddingBottom: '6px',
          },
        },
        notchedOutline: {
          top: 0,
          legend: {
            display: 'none',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          '&.MuiFormHelperText-sizeSmall': {
            fontSize: '0.6875rem',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root:
          mode === 'light'
            ? {
                backgroundColor: getGrey(900),
                color: getGrey(200),
              }
            : {},
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 48,
          maxHeight: 48,
          ...(mode === 'light' && {
            '& .MuiTypography-root': { color: colors.common.white },
          }),
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'light' ? getGrey(100) : getGrey(900),
          color: colors.text.primary,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        disableRipple: true,
        size: 'small',
      },
      styleOverrides: {
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '& path': { fill: 'currentColor' },
        },
        fontSizeSmall: { fontSize: '1rem' },
        fontSizeMedium: { fontSize: '1.5rem' },
        fontSizeLarge: { fontSize: '2rem' },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: 'background-color .2s',
          '&.MuiTableRow-hover:hover': {
            backgroundColor: mode === 'light' ? getGrey(300) : getGrey(700),
          },
        },
        head: {
          background: mode === 'light' ? getGrey(300) : getGrey(800),
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          padding: '0.75rem 1rem',
        },
        head: {
          fontSize: '0.8125rem',
          fontWeight: 700,
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
