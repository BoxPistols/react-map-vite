import { createTheme } from '@mui/material/styles'

import { colorData } from './colorToken'
import { typographyComponentsOverrides, typographyOptions } from './typography'

declare module '@mui/material/styles' {
  // type PaletteColorOptions = ExtendedPaletteColor;
  interface PaletteColor {
    lighter?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
  }
  // 独自カラー
  interface Palette {
    // background utility
    surfaceBackground: string
    surfaceBackgroundDark: string
    surfaceBackgroundDisabled: string
    // icon
    iconWhite: string
    iconLight: string
    iconDark: string
    iconAction: string
    iconDisabled: string
  }

  interface PaletteOptions {
    // background utility
    surfaceBackground: string
    surfaceBackgroundDark: string
    surfaceBackgroundDisabled: string
    // icon
    iconWhite: string
    iconLight: string
    iconDark: string
    iconAction: string
    iconDisabled: string
  }
}

export const theme = createTheme({
  // ----- Typography -----
  typography: typographyOptions,
  // ----- Color Palette -----
  palette: {
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

    grey: {
      50: colorData.grey[50],
      100: colorData.grey[100],
      200: colorData.grey[200],
      300: colorData.grey[300],
      400: colorData.grey[400],
      500: colorData.grey[500],
      600: colorData.grey[600],
      700: colorData.grey[700],
      800: colorData.grey[800],
      900: colorData.grey[900],
    },
    common: {
      black: colorData.common.black,
      white: colorData.common.white,
    },

    // 独自カラー (surface)
    surfaceBackground: colorData.surface.background,
    surfaceBackgroundDark: colorData.surface.backgroundDark,
    surfaceBackgroundDisabled: colorData.surface.backgroundDisabled,
    // icon color
    iconWhite: colorData.icon.white,
    iconLight: colorData.icon.light,
    iconDark: colorData.icon.dark,
    iconAction: colorData.icon.action,
    iconDisabled: colorData.icon.disabled,
  },

  // ----- components -----
  components: {
    ...typographyComponentsOverrides,
    // 全体のスタイル
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colorData.background.default,
          color: colorData.text.primary,
        },
      },
    },
    // Headerのスタイル
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
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
    // Drawerのスタイル
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 180, // サイドナビゲーションの幅を設定
          top: 0,
          backgroundColor: colorData.grey[900],
          '.MuiListItemText-root .MuiListItemText-primary': {
            textAlign: 'left',
          },
        },
      },
    },
    // ボタンのスタイル
    MuiButton: {
      defaultProps: {
        variant: 'contained', // デフォルトのボタンの種類を設定
        disableElevation: true, // デフォルトの影を削除
        disableRipple: true, // デフォルトのrippleを削除
        size: 'small', // デフォルトのボタンのサイズを設定
      },
      styleOverrides: {
        sizeSmall: {
          padding: '0.25em 0.875em',
        },
        contained: {
          // 背景がcontainedの時のスタイル
          '&.MuiButton-contained.MuiButton-root': {
            color: colorData.text.white,
          },
          '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
            color: colorData.text.primary,
          },
        },
      },
    },

    // SvgIconのスタイル
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '& path': {
            fill: 'currentColor', // svgの色を親から変更できるように設定
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
    // Tableのスタイル
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: colorData.grey[300],
        },
        root: {
          transition: 'background-color .2s',

          '&.MuiTableRow-hover:hover': {
            backgroundColor: colorData.grey[300],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        // FIXME! TableCell
        root: {
          // borderBottomColor: colors.alpha.black[10],
          fontSize: '1rem',
          padding: '0.75rem 1rem',
        },
        head: {
          // textTransform: 'uppercase',
          fontSize: '0.8125rem',
          fontWeight: '700',
          // color: colors.alpha.black[70],
        },
      },
    },
  },
  // ======== global settings 全体調整で必要な時に設置 ========

  // ===== Shape Muiコンポーネント全て、の丸み感の調整 =====
  shape: {
    borderRadius: 2, // デフォルト値 = 4
  },
  // アニメーションの設定
  transitions: {
    easing: {
      // ...
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      // ...
      leavingScreen: 100,
      enteringScreen: 100,
    },
  },
  // ===== Spacing 余白やコンポーネントの大きさ等、Muiすべてのベースのサイズ基準 =====
  spacing: 4, // = デフォルト値 = 8
  // ===== Z-Index コンポーネントの重なり順の不具合があった時に必要応じて設定 =====
  // example
  zIndex: {
    appBar: 1100,
    drawer: 1000,
    // modal: 1300,
    // snackbar: 1400,
    // tooltip: 1500,
  },
})
