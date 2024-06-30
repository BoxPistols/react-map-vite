import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { theme } from '@/lib/theme'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import App from '@/App'
import '@/index.css'

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [],
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={cache}>
        <div className='relative h-screen overflow-hidden'>
          <App />
        </div>
      </CacheProvider>
    </ThemeProvider>
  </StrictMode>
)
