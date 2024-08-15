import App from '@/App'
import { ThemeProvider } from '@/components/ThemeProvider'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

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

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
