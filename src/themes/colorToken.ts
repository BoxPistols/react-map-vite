import { amber, blue, pink } from '@mui/material/colors'

type ColorSet = {
  main: string
  dark?: string
  light?: string
  lighter?: string
  textContrast?: string
}

type GreyShades = {
  [key: number]: string
}

type ThemeColors = {
  primary: ColorSet
  secondary: ColorSet
  success: ColorSet
  info: ColorSet
  warning: ColorSet
  error: ColorSet
  grey: GreyShades
  text: {
    primary: string
    secondary: string
    disabled: string
    white: string
  }
  background: {
    default: string
    paper: string
  }
  action: {
    hover: string
    selected: string
    disabled: string
    active: string
  }
  surface: {
    background: string
    backgroundDark: string
    backgroundDisabled: string
  }
  icon: {
    white: string
    light: string
    dark: string
    action: string
    disabled: string
  }
  divider: string
  common: {
    black: string
    white: string
  }
}

const createColorSet = (
  main: string,
  dark?: string,
  light?: string,
  lighter?: string,
  textContrast?: string
): ColorSet => ({
  main,
  dark,
  light,
  lighter,
  textContrast,
})

const greyShades: GreyShades = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#4e4e4e',
  800: '#3a3a3a',
  850: '#323232',
  900: '#292929',
}

const createThemeColors = (isLight: boolean): ThemeColors => ({
  primary: createColorSet(
    isLight ? '#0e0d6a' : '#4f4ea7',
    isLight ? '#11114a' : '#272675',
    isLight ? '#5451d6' : '#5a58b4',
    isLight ? '#b5b4ee' : '#b1b0e9'
  ),
  secondary: createColorSet(
    isLight ? '#696881' : '#8c8da3',
    isLight ? '#424242' : '#5a5a5a',
    isLight ? '#757575' : '#a1a1a1',
    isLight ? '#FAFAFA' : '#f0f0f0'
  ),
  success: createColorSet(
    isLight ? '#46ab4a' : '#66BB6A',
    isLight ? '#3f7f42' : '#388E3C',
    isLight ? '#6db770' : '#81C784',
    isLight ? '#d4e9d4' : '#E8F5E9'
  ),
  info: createColorSet(
    isLight ? '#1dafc2' : '#00ACC1',
    isLight ? '#277781' : '#05747e',
    isLight ? '#43bfcf' : '#4DD0E1',
    isLight ? '#bde8ee' : '#B2EBF2'
  ),
  warning: createColorSet(
    isLight ? '#eb8117' : '#FFA726',
    isLight ? '#EF6C00' : '#F57C00',
    isLight ? '#dd9c3c' : '#eca233',
    isLight ? '#FFF3E0' : '#FFE0B2'
  ),
  error: createColorSet(
    isLight ? '#da3737' : '#EF5350',
    isLight ? '#c63535' : '#D32F2F',
    isLight ? '#dc4e4e' : '#d55757',
    isLight ? '#FFEBEE' : '#FFCDD2'
  ),
  grey: greyShades,
  text: {
    primary: isLight ? '#223354' : '#ffffff',
    secondary: isLight ? '#4A515E' : '#cfcfcf',
    disabled: isLight ? greyShades[400] : greyShades[500],
    white: '#ffffff',
  },
  background: {
    default: isLight ? '#FFFFFF' : '#313035',
    paper: isLight ? '#FFFFFF' : '#3b3b3d',
  },
  action: {
    hover: isLight ? '#f5f5f5' : '#333333',
    selected: isLight ? '#e0e0e0' : '#444444',
    disabled: isLight ? greyShades[300] : greyShades[700],
    active: isLight ? '#f5f5f5' : '#333333',
  },
  surface: {
    background: isLight ? '#fafbfc' : '#4e4e4e',
    backgroundDark: '#616161',
    backgroundDisabled: isLight ? '#e0e0e0' : '#616161',
  },
  icon: {
    white: '#ffffff',
    light: isLight ? '#757575' : '#bdbdbd',
    dark: isLight ? '#424242' : '#9e9e9e',
    action: amber[400],
    disabled: isLight ? '#e0e0e0' : '#616161',
  },
  divider: isLight ? '#E0E0E0' : '#323235',
  common: {
    black: isLight ? '#323538' : '#2c2828',
    white: '#ffffff',
  },
})

// これは、後にチャートなどの色を設計する時の参考
export const colorData = {
  chart: {
    blue: { 50: blue[50], 200: blue[200] },
    pink: { 200: pink[200] },
  },
  ...createThemeColors(true),
  dark: createThemeColors(false),
}

export const getGrey = (shade: keyof typeof greyShades): string =>
  greyShades[shade]

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
