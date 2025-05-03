import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import { ThemeProvide } from '@/components/ThemeProvider'
import './index.css'

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [],
})

const Root = () => {
  return (
    <StrictMode>
      <ThemeProvide>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </ThemeProvide>
    </StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
