import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './layouts/Header.tsx'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './lib/theme'
import './index.css'

const cache = createCache({
  key: 'css',
  prepend: true,

  stylisPlugins: [],
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cache}>
        <div className='relative h-screen overflow-hidden'>
          <Header />
        </div>
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>
)
