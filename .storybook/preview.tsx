import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import { theme } from '../src/lib/theme'

import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    ),
  ],
}

export default preview
