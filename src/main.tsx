import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import { ThemeProvider } from '@/components/ThemeProvider'
import { initializeDemoData } from '@/hooks/useLocalStorage'
import './index.css'

// Initialize demo data in localStorage
initializeDemoData()

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [],
})

const Root = () => {
  return (
    <StrictMode>
      <ThemeProvider>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Root />)
} else {
  console.error('Root element not found')
}
