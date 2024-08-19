import type React from 'react';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    xxl: React.CSSProperties;
    xl: React.CSSProperties;
    lg: React.CSSProperties;
    ml: React.CSSProperties;
    md: React.CSSProperties;
    sm: React.CSSProperties;
    xs: React.CSSProperties;
    xxs: React.CSSProperties;
    xxxs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    xxl?: React.CSSProperties;
    xl?: React.CSSProperties;
    lg?: React.CSSProperties;
    ml?: React.CSSProperties;
    md?: React.CSSProperties;
    sm?: React.CSSProperties;
    xs?: React.CSSProperties;
    xxs?: React.CSSProperties;
    xxxs?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    xxl: true;
    xl: true;
    lg: true;
    ml: true;
    md: true;
    sm: true;
    xs: true;
    xxs: true;
    xxxs: true;
  }
}
