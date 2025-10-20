import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

import { useThemeStore } from '@/hooks/useThemeStore'
import { theme, darkTheme } from '@/theme'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme: currentTheme } = useThemeStore()
  const muiTheme = currentTheme === 'dark' ? darkTheme : theme

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
