import type {
  CSSProperties,
  TypographyOptions,
} from '@mui/material/styles/createTypography'

import type React from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties
    displayMedium: React.CSSProperties
    displaySmall: React.CSSProperties
    xxl: React.CSSProperties
    xl: React.CSSProperties
    lg: React.CSSProperties
    ml: React.CSSProperties
    md: React.CSSProperties
    sm: React.CSSProperties
    xs: React.CSSProperties
    xxs: React.CSSProperties
    xxxs: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    displayLarge: React.CSSProperties
    displayMedium: React.CSSProperties
    displaySmall: React.CSSProperties
    xxl?: React.CSSProperties
    xl?: React.CSSProperties
    lg?: React.CSSProperties
    ml?: React.CSSProperties
    md?: React.CSSProperties
    sm?: React.CSSProperties
    xs?: React.CSSProperties
    xxs?: React.CSSProperties
    xxxs?: React.CSSProperties
  }
}

// Existing type declarations
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true
    displayMedium: true
    displaySmall: true
    xxl: true
    xl: true
    lg: true
    ml: true
    md: true
    sm: true
    xs: true
    xxs: true
    xxxs: true
  }
}

declare module '@mui/material/styles' {
  interface Typography {
    displayLarge: CSSProperties
    displayMedium: CSSProperties
    displaySmall: CSSProperties
    xxl?: CSSProperties
    xl?: CSSProperties
    lg?: CSSProperties
    ml?: CSSProperties
    md?: CSSProperties
    sm?: CSSProperties
    xs?: CSSProperties
    xxs?: CSSProperties
    xxxs?: CSSProperties
  }
}

// Typography-related constants and functions
const baseFontSize = 14

const pxToRem = (px: number) => {
  const remValue = (px / baseFontSize).toFixed(2)
  return `${Number.parseFloat(remValue)}rem`
}

const fontSizesVariant = {
  displayLarge: pxToRem(32),
  displayMedium: pxToRem(28),
  displaySmall: pxToRem(24),
  xxl: pxToRem(22),
  xl: pxToRem(20),
  lg: pxToRem(18),
  ml: pxToRem(16),
  md: pxToRem(14),
  sm: pxToRem(13),
  xs: pxToRem(12),
  xxs: pxToRem(11),
  xxxs: pxToRem(10),
}

const fontWeight = {
  bold: 700,
  medium: 500,
  normal: 400,
}

const lineHeight = {
  large: 1.8,
  medium: 1.6,
  small: 1.4,
}

const heading = {
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.small,
}

// Typography options
export const typographyOptions: TypographyOptions = {
  htmlFontSize: baseFontSize,
  fontSize: baseFontSize,
  fontFamily: 'Inter, Noto Sans JP, Helvetica, Arial, sans-serif',
  allVariants: {
    fontFamily: 'Inter, Noto Sans JP, Helvetica, Arial, sans-serif',
    lineHeight: lineHeight.medium,
    fontWeight: fontWeight.normal,
    textTransform: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'antialiased',
    fontSize: pxToRem(baseFontSize),
  },
  h1: {
    fontSize: fontSizesVariant.xxl,
    ...heading,
  },
  h2: {
    fontSize: fontSizesVariant.xl,
    ...heading,
  },
  h3: {
    fontSize: fontSizesVariant.lg,
    ...heading,
  },
  h4: {
    fontSize: fontSizesVariant.ml,
    ...heading,
  },
  h5: {
    fontSize: fontSizesVariant.md,
    ...heading,
  },
  h6: {
    fontSize: fontSizesVariant.sm,
    ...heading,
  },
  body1: {
    fontSize: fontSizesVariant.md,
    lineHeight: lineHeight.medium,
  },
  body2: {
    fontSize: fontSizesVariant.sm,
    lineHeight: lineHeight.medium,
  },
  subtitle1: {
    fontSize: fontSizesVariant.sm,
    lineHeight: lineHeight.small,
  },
  subtitle2: {
    fontSize: fontSizesVariant.xs,
    lineHeight: lineHeight.small,
  },
  caption: {
    fontSize: fontSizesVariant.xs,
    lineHeight: lineHeight.small,
  },
  overline: {
    fontSize: fontSizesVariant.xxs,
    lineHeight: lineHeight.small,
    textTransform: 'none',
  },
  button: {
    fontSize: fontSizesVariant.md,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.medium,
    textTransform: 'none',
  },
  displayLarge: {
    fontSize: fontSizesVariant.displayLarge,
    ...heading,
  },
  displayMedium: {
    fontSize: fontSizesVariant.displayMedium,
    ...heading,
  },
  displaySmall: {
    fontSize: fontSizesVariant.displaySmall,
    ...heading,
  },
  xxl: {
    fontSize: fontSizesVariant.xxl,
    ...heading,
  },
  xl: {
    fontSize: fontSizesVariant.xl,
    ...heading,
  },
  lg: {
    fontSize: fontSizesVariant.lg,
    ...heading,
  },
  ml: {
    fontSize: fontSizesVariant.ml,
    lineHeight: lineHeight.small,
  },
  md: {
    fontSize: fontSizesVariant.md,
    lineHeight: lineHeight.small,
  },
  sm: {
    fontSize: fontSizesVariant.sm,
    lineHeight: lineHeight.small,
  },
  xs: {
    fontSize: fontSizesVariant.xs,
    lineHeight: lineHeight.small,
  },
  xxs: {
    fontSize: fontSizesVariant.xxs,
    lineHeight: lineHeight.small,
  },
  xxxs: {
    fontSize: fontSizesVariant.xxxs,
    lineHeight: lineHeight.small,
  },
}

export const typographyComponentsOverrides = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'div',
        h3: 'div',
        h4: 'div',
        h5: 'div',
        h6: 'div',
        body1: 'p',
        body2: 'p',
        subtitle1: 'p',
        subtitle2: 'p',
        overline: 'span',
        caption: 'span',
        button: 'p',
        displayLarge: 'div',
        displayMedium: 'div',
        displaySmall: 'div',
        xxl: 'div',
        xl: 'div',
        lg: 'div',
        ml: 'p',
        md: 'p',
        sm: 'p',
        xs: 'p',
        xxs: 'span',
        xxxs: 'span',
      },
    },
    styleOverrides: {
      gutterBottom: {
        marginBottom: '1em',
      },
      paragraph: {
        marginBottom: '1em',
        fontSize: fontSizesVariant.md,
      },
    },
  },
}
