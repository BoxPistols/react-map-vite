import { amber, blue, grey, indigo, pink } from '@mui/material/colors'

export const colorData = {
  // チャートカラー
  chart: {
    blue: {
      50: blue[50],
      200: blue[200],
    },
    pink: {
      200: pink[200],
    },
  },
  // 共通ユーティリティカラー
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#4e4e4e',
    800: '#3a3a3a',
    900: '#292929',
  },
  // Mui テーマカラー
  primary: {
    main: '#0e0d6a',
    dark: '#0a094a',
    light: '#7373a9',
    lighter: '#e7e7f0',
  },
  secondary: {
    main: '#696881',
    dark: '#424242',
    light: '#757575',
    lighter: '#FAFAFA',
  },
  error: {
    main: '#D32F2F',
    dark: '#C62828',
    light: '#E57373',
    lighter: '#FFEBEE',
  },
  success: {
    main: '#4CAF50',
    dark: '#388E3C',
    light: '#81C784',
    lighter: '#E8F5E9',
  },
  warning: {
    main: '#F57C00',
    dark: '#EF6C00',
    light: '#FFB74D',
    lighter: '#FFF3E0',
  },
  info: {
    main: '#10c8e0',
    dark: '#0d9cb7',
    light: '#4dd0e1',
    lighter: '#e0f7fa',
  },
  text: {
    primary: '#223354',
    secondary: '#4A515E',
    disabled: '#9e9e9e',
    white: '#ffffff', // option
  },
  divider: '#E0E0E0',
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
  common: {
    black: '#123456',
    white: '#ffffff',
  },
  // ===== 独自のキーを追加 =====
  surface: {
    background: '#fafbfc',
    backgroundDark: '#616161',
    backgroundDisabled: '#e0e0e0',
  },
  icon: {
    white: '#ffffff',
    light: grey[600],
    dark: grey[700],
    action: amber[400],
    disabled: grey[500],
  },
  action: {
    hover: '#f5f5f5',
    selected: '#e0e0e0',
    disabled: grey[300],
  },

  // ===== Dark Theme Colors =====
  dark: {
    primary: {
      main: indigo[500],
      lighter: indigo[50],
      dark: indigo[900],
      light: indigo[300],
    },
    secondary: {
      main: '#696881',
      lighter: '#FAFAFA',
      dark: '#424242',
      light: '#757575',
    },
    success: {
      main: '#4CAF50',
      lighter: '#E8F5E9',
      dark: '#388E3C',
      light: '#81C784',
    },
    info: {
      main: '#10c8e0',
      lighter: '#e0f7fa',
      dark: '#0d9cb7',
      light: '#4dd0e1',
    },
    warning: {
      main: '#F57C00',
      lighter: '#FFF3E0',
      dark: '#EF6C00',
      light: '#FFB74D',
    },
    error: {
      main: '#D32F2F',
      lighter: '#FFEBEE',
      dark: '#C62828',
      light: '#E57373',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cfcfcf',
      disabled: '#9e9e9e',
      white: '#ffffff',
    },
    action: {
      hover: '#333333',
      selected: '#444444',
      disabled: grey[700],
    },
    divider: '#616161',
    background: {
      default: '#212121',
      paper: '#333333',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#4e4e4e',
      800: '#3a3a3a',
      900: '#292929',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    surfaceBackground: '#121212',
    surfaceBackgroundDark: '#1d1d1d',
    surfaceBackgroundDisabled: '#616161',
    iconWhite: '#ffffff',
    iconLight: grey[300],
    iconDark: grey[200],
    iconAction: amber[400],
    iconDisabled: grey[500],
  },
}

/* ===== Examples =====
styled-componentsを使う場合
const StyledComponent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

useThemeフックを使う場合
function SomeComponent() {
  const theme = useTheme();
  return <Box sx={{ backgroundColor: theme.palette.primary.main }}>Hello</Box>;
}
*/

//  ===== CSS Variables =====
/** CSS化する場合の生成コード */
/**
let cssVars = ':root {\n'
for (const [key, value] of Object.entries(colorData)) {
  if (typeof value === 'string') {
    cssVars += `  --${key}: ${value};\n`
  } else {
    for (const [subKey, subValue] of Object.entries(value)) {
      if (typeof subValue === 'string') {
        cssVars += `  --${key}-${subKey}: ${subValue};\n`
      } else {
        for (const [nestedKey, nestedValue] of Object.entries(subValue)) {
          cssVars += `  --${key}-${subKey}-${nestedKey}: ${nestedValue};\n`
        }
      }
    }
  }
}
cssVars += '}'

console.log(cssVars)
*/
