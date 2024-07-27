import { createTheme } from '@mui/material/styles'
import { colorData } from './colorToken'
import { typographyComponentsOverrides, typographyOptions } from './typography'

declare module '@mui/material/styles' {
  interface Palette {
    surfaceBackground: string
    surfaceBackgroundDark: string
    surfaceBackgroundDisabled: string
    iconWhite: string
    iconLight: string
    iconDark: string
    iconAction: string
    iconDisabled: string
  }

  interface PaletteOptions {
    surfaceBackground?: string
    surfaceBackgroundDark?: string
    surfaceBackgroundDisabled?: string
    iconWhite?: string
    iconLight?: string
    iconDark?: string
    iconAction?: string
    iconDisabled?: string
  }

  interface PaletteColor {
    lighter?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
  }
}

const commonPalette = {
  surfaceBackground: colorData.surface.background,
  surfaceBackgroundDark: colorData.surface.backgroundDark,
  surfaceBackgroundDisabled: colorData.surface.backgroundDisabled,
  iconWhite: colorData.icon.white,
  iconLight: colorData.icon.light,
  iconDark: colorData.icon.dark,
  iconAction: colorData.icon.action,
  iconDisabled: colorData.icon.disabled,
}

// ===== 共有スタイル =====
const commonComponentStyles = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        // 色以外の共通スタイル
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {},
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        '@media (min-width:0px)': {
          minHeight: 56,
          maxHeight: 56,
        },
        '@media (min-width:480px)': {
          minHeight: 56,
          maxHeight: 56,
        },
        '@media (min-width:600px)': {
          minHeight: 56,
          maxHeight: 56,
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: 180,
        top: 0,
        '.MuiListItemText-root .MuiListItemText-primary': {
          textAlign: 'left',
        },
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
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        '& path': {
          fill: 'currentColor',
        },
      },
      fontSizeSmall: {
        fontSize: '1rem',
      },
      fontSizeMedium: {
        fontSize: '1.5rem',
      },
      fontSizeLarge: {
        fontSize: '2rem',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: 'background-color .2s',
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
        fontWeight: '700',
      },
    },
  },
}

// ===== ライトテーマ =====
export const theme = createTheme({
  typography: typographyOptions,
  palette: {
    mode: 'light',
    primary: {
      main: colorData.primary.main,
      lighter: colorData.primary.lighter,
      dark: colorData.primary.dark,
      light: colorData.primary.light,
    },
    secondary: {
      main: colorData.secondary.main,
      lighter: colorData.secondary.lighter,
      dark: colorData.secondary.dark,
      light: colorData.secondary.light,
    },
    success: {
      main: colorData.success.main,
      lighter: colorData.success.lighter,
      dark: colorData.success.dark,
      light: colorData.success.light,
    },
    info: {
      main: colorData.info.main,
      lighter: colorData.info.lighter,
      dark: colorData.info.dark,
      light: colorData.info.light,
    },
    warning: {
      main: colorData.warning.main,
      lighter: colorData.warning.lighter,
      dark: colorData.warning.dark,
      light: colorData.warning.light,
    },
    error: {
      main: colorData.error.main,
      lighter: colorData.error.lighter,
      dark: colorData.error.dark,
      light: colorData.error.light,
    },
    text: {
      primary: colorData.text.primary,
      secondary: colorData.text.secondary,
      disabled: colorData.text.disabled,
    },
    action: {
      hover: colorData.action.hover,
      selected: colorData.action.selected,
      disabled: colorData.action.disabled,
    },
    divider: colorData.divider,
    background: {
      default: colorData.background.default,
      paper: colorData.background.paper,
    },
    grey: colorData.grey,
    common: colorData.common,
    ...commonPalette,
  },
  components: {
    ...typographyComponentsOverrides,
    ...commonComponentStyles,
    // ライトテーマ固有の色スタイル
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorData.background.default,
          color: colorData.text.primary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // backgroundColor: theme.palette.grey[900],
        root: {
          backgroundColor: colorData.grey[900],
          color: colorData.grey[200],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            color: colorData.common.white,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colorData.grey[900],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&.MuiButton-contained.MuiButton-root': {
            color: colorData.text.white,
          },
          '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
            color: colorData.text.primary,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: colorData.grey[300],
        },
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: colorData.grey[300],
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 2,
  },
  transitions: {
    easing: {
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      leavingScreen: 100,
      enteringScreen: 100,
    },
  },
  spacing: 4,
  zIndex: {
    appBar: 1100,
    drawer: 1000,
  },
})

// ===== ダークテーマ =====
export const darkTheme = createTheme({
  typography: typographyOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: colorData.dark.primary.main,
      lighter: colorData.dark.primary.lighter,
      dark: colorData.dark.primary.dark,
      light: colorData.dark.primary.light,
    },
    secondary: {
      main: colorData.dark.secondary.main,
      lighter: colorData.dark.secondary.lighter,
      dark: colorData.dark.secondary.dark,
      light: colorData.dark.secondary.light,
    },
    success: {
      main: colorData.dark.success.main,
      lighter: colorData.dark.success.lighter,
      dark: colorData.dark.success.dark,
      light: colorData.dark.success.light,
    },
    info: {
      main: colorData.dark.info.main,
      lighter: colorData.dark.info.lighter,
      dark: colorData.dark.info.dark,
      light: colorData.dark.info.light,
    },
    warning: {
      main: colorData.dark.warning.main,
      lighter: colorData.dark.warning.lighter,
      dark: colorData.dark.warning.dark,
      light: colorData.dark.warning.light,
    },
    error: {
      main: colorData.dark.error.main,
      lighter: colorData.dark.error.lighter,
      dark: colorData.dark.error.dark,
      light: colorData.dark.error.light,
    },
    text: {
      primary: colorData.dark.text.primary,
      secondary: colorData.dark.text.secondary,
      disabled: colorData.dark.text.disabled,
    },
    action: {
      hover: colorData.dark.action.hover,
      selected: colorData.dark.action.selected,
      disabled: colorData.dark.action.disabled,
    },
    divider: colorData.dark.divider,
    background: {
      default: colorData.dark.background.default,
      paper: colorData.dark.background.paper,
    },
    grey: colorData.dark.grey,
    common: colorData.dark.common,
    ...commonPalette,
  },
  components: {
    ...typographyComponentsOverrides,
    ...commonComponentStyles,
    // ダークテーマ固有の色スタイル
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorData.dark.background.default,
          color: colorData.dark.text.primary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // '& .MuiTypography-root': {
          //   color: colorData.dark.common.white,
          // },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundColor: colorData.dark.grey[900],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&.MuiButton-contained.MuiButton-root': {
            color: colorData.dark.text.white,
          },
          '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
            color: colorData.dark.text.primary,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: colorData.dark.grey[800],
        },
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: colorData.dark.grey[700],
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: {
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      leavingScreen: 100,
      enteringScreen: 100,
    },
  },
  spacing: 4,
  zIndex: {
    appBar: 1100,
    drawer: 1000,
  },
})
