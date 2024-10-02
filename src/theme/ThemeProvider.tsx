import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  createTheme,
} from '@mui/material/styles'
import type { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvide = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: 'light',
        },
      },
      // dark: false,
      dark: {
        palette: {
          mode: 'dark',
        },
      },
    },
  })

  return (
    <CssVarsProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CssVarsProvider>
  )
}
