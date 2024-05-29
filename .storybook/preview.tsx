import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../src/lib/theme'
import type { Preview } from '@storybook/react'

import '../src/index.css'
import React from 'react'

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
