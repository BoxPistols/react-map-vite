import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import * as eslintPluginImport from 'eslint-plugin-import'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/node_modules',
      '**/.turbo',
      '**/dist',
      '**/.next',
      '**/storybook-static',
      '*.d.ts',
      '*.config.js',
      '*.config.ts',
      '**/public',
      '**/test-reports',
      '.git',
      '.vscode',
      '.idea',
      '.DS_Store',
      'pnpm-lock.yaml',
      'pnpm-debug.log',
      'routeTree.gen.ts',
      '**/gql',
      '.schema',
      '**/.env*',
      "~/.continue"
    ],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        browser: true,
        es2021: true,
        node: true,
        process: true,
      },
    },
    plugins: {
      import: eslintPluginImport,
      'unused-imports': eslintPluginUnusedImports,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      tailwindcss: eslintPluginTailwindCSS,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type'
          ],
          'pathGroups': [
            {
              'pattern': '@mui/icons-material/**',
              'group': 'external',
              'position': 'before'
            },
            {
              'pattern': '@mui/material',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': '@tanstack/**',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': 'react',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': '@maplibre/**',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': '@googlemaps/**',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': 'geojson',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': '@repo/**',
              'group': 'external',
              'position': 'after'
            },
            {
              'pattern': '@/**',
              'group': 'internal',
              'position': 'after'
            }
          ],
          'distinctGroup': false,
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true
          }
        }
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-constant-condition': 'error',
      'no-duplicate-case': 'error',
      'no-fallthrough': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-prototype-builtins': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      tseslint.configs.strict,
      eslintPluginReact.configs.flat.recommended,
      eslintPluginReact.configs.flat['jsx-runtime'],
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      'react/display-name': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error', // Changed from array to string
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          'enableDangerousAutofixThisMayCauseInfiniteLoops': true,
          'additionalHooks': '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
        }
      ],
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  }
)
