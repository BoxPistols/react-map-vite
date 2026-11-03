/**
 * theme/index.ts
 * テーマとデザイントークンのメインエクスポートファイル
 */

// 既存のテーマファイルからインポート
import { colorData, getGrey } from '../themes/colorToken'
import { theme, lightTheme, darkTheme, type AppTheme } from '../themes/theme'
import {
  fontSizesVariant,
  typographyOptions,
  typographyComponentsOverrides,
} from '../themes/typography'

// 型定義のインポート
import type {
  ExtendedPaletteOptions,
  ColorSchemeOptions,
  ThemeMode,
} from '../types/theme'

// デザイントークンのエクスポート
export const tokens = {
  colors: colorData,
  typography: {
    fontSizes: fontSizesVariant,
    options: typographyOptions,
    components: typographyComponentsOverrides,
  },
}

// テーマのエクスポート
export { theme, lightTheme, darkTheme, getGrey }

// 型のエクスポート
export type { ExtendedPaletteOptions, ColorSchemeOptions, ThemeMode, AppTheme }

// デフォルトエクスポート
export default theme
