import App from '@/App'
import { darkTheme, theme as lightTheme } from '@/lib/themes/theme'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [],
})

const Root = () => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setTheme(darkTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme === lightTheme ? 'light' : 'dark')
  }, [theme])

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={cache}>
          <App toggleTheme={toggleTheme} />
        </CacheProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
