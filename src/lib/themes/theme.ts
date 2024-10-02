import { type Theme, createTheme } from '@mui/material/styles'
import type { TypographyOptions } from '@mui/material/styles/createTypography'
import { colorData } from './colorToken'
import { typographyComponentsOverrides, typographyOptions } from './typography'

const commonThemeOptions = {
  typography: typographyOptions as TypographyOptions,
  shape: { borderRadius: 2 },
  transitions: {
    easing: { sharp: 'cubic-bezier(0.4, 0, 0.6, 1)' },
    duration: { leavingScreen: 100, enteringScreen: 100 },
  },
  spacing: 4,
  zIndex: { appBar: 1100, drawer: 1000 },
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
