// src/themes/theme.ts（統合後）
import {
  type Components,
  type CssVarsTheme,
  type Theme,
  createTheme,
} from '@mui/material/styles'

import { colorData } from './colorToken'
import {
  fontSizesVariant,
  typographyComponentsOverrides,
  typographyOptions,
} from './typography'

// Button共通
const CommomButtonStyles = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1.5,
  fontWeight: 500,
  whiteSpace: 'nowrap',
}

// 共通設定
const commonThemeOptions = {
  typography: typographyOptions,
  shape: { borderRadius: 4 },
  transitions: {
    easing: { sharp: 'cubic-bezier(0.4, 0, 0.6, 1)' },
    duration: { leavingScreen: 100, enteringScreen: 100 },
  },
  spacing: 4,
  zIndex: { appBar: 1100, drawer: 1000 },
}

// コンポーネントスタイルの定義
const componentStyles = {
  ...typographyComponentsOverrides,
  MuiCssBaseline: {
    styleOverrides: {
      body: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        height: 44,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 44,
        '@media(min-width:0px)': {
          minHeight: 44,
        },
      },
    },
  },
  // Button UI
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      // disableElevation: true, // デフォルトの影を削除
      // disableRipple: true, // リップル効果を無効化
      // disableFocusRipple: true, // フォーカス時のリップル効果を無効化
      color: 'primary',
      size: 'medium',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: 4,
      },
      sizeSmall: {
        padding: '0.25em 1.2em',
        fontSize: fontSizesVariant.xs,
        ...CommomButtonStyles,
      },
      sizeMedium: {
        padding: '0.45em 1.5em',
        fontSize: fontSizesVariant.sm,
        ...CommomButtonStyles,
      },
      sizeLarge: {
        padding: '0.5em 1.75em',
        fontSize: fontSizesVariant.md,
        ...CommomButtonStyles,
      },
      '&.Mui-disabled': {
        color: colorData.text.disabled,
        backgroundColor: colorData.grey[300],
      },
      contained: ({ theme }: { theme: Theme }) => ({
        '&.MuiButton-contained.MuiButton-root': {
          color:
            theme.palette.mode === 'light'
              ? colorData.text.white
              : colorData.dark.text.white,
        },
        '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
          color: theme.palette.text.primary,
        },
        '&.MuiButton-root.Mui-disabled': {
          color:
            theme.palette.mode === 'light'
              ? colorData.text.disabled
              : colorData.grey[500],
          backgroundColor:
            theme.palette.mode === 'light'
              ? colorData.grey[300]
              : colorData.grey[700],
        },
      }),
    },
  },
  // その他のコンポーネントスタイル
}

// MUI 6のcolorSchemesを使用した統合テーマ
const theme = createTheme({
  ...commonThemeOptions,
  typography: typographyOptions,
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
  components: componentStyles as Components<
    Omit<Theme, 'components' | 'palette'> & CssVarsTheme
  >,
})

// 後方互換性のために従来のテーマも提供
const lightTheme = createTheme({
  ...commonThemeOptions,
  typography: typographyOptions,
  palette: {
    mode: 'light',
    ...colorData,
    background: {
      ...colorData.background,
      default: colorData.background.default,
      paper: colorData.background.paper,
    },
  },
  components: componentStyles as Components<Theme>,
})

const darkTheme = createTheme({
  ...commonThemeOptions,
  typography: typographyOptions,
  palette: {
    mode: 'dark',
    ...colorData.dark,
    background: {
      ...colorData.dark.background,
      default: colorData.dark.background.default,
      paper: colorData.dark.background.paper,
    },
  },
  components: componentStyles as Components<Theme>,
})

// Theme 型も明示的にエクスポート
export type AppTheme = typeof theme

export { theme, lightTheme, darkTheme }
