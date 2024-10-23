// src/constants/layout.ts

/**
 * アプリケーション全体のレイアウトに関する定数を定義
 */
export const LAYOUT_CONSTANTS = {
  SIDEBAR: {
    WIDTH_OPENED: 240, // サイドバーが開いているときの幅
    WIDTH_CLOSED: 96, // サイドバーが閉じているときの幅
  },
  RIGHT_DRAWER: {
    WIDTH: 320, // 右ドロワーの幅
  },
  HEADER: {
    HEIGHT: 64, // ヘッダーの高さ
  },
} as const

/**
 * 数値にpxを付加するユーティリティ関数
 * @param value 数値
 * @returns string `${value}px`
 */
export const getLayoutValue = (value: number): string => `${value}px`

/**
 * vh単位を付加するユーティリティ関数
 * @param value 数値
 * @returns string `${value}vh`
 */
export const getVhValue = (value: number): string => `${value}vh`

/**
 * パーセント単位を付加するユーティリティ関数
 * @param value 数値
 * @returns string `${value}%`
 */
export const getPercentValue = (value: number): string => `${value}%`
