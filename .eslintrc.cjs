module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', 'build', 'public', 'storybook-static'],
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier', 'tailwindcss'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // 'no-unused-vars': 'error', // TypeScript でチェックするので off
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // React Refresh のための設定
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'never' }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], //
    'react/jsx-curly-spacing': ['error', 'never'], //
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-props-no-spreading': 'error', // props のスプレッドを禁止
    'jsx-a11y/anchor-is-valid': 'error', // a タグの href 属性の検証を厳密に行う
    'jsx-a11y/label-has-associated-control': 'error', // label 要素と関連する input 要素を持つか検証
    'jsx-a11y/label-has-for': 'error', // label 要素には for 属性を持つ
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
