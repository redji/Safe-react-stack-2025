import { Brightness4, Brightness7 } from '@mui/icons-material'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import { useThemeStore } from '@/hooks/useThemeStore'

export function Header() {
  const { theme, toggleTheme } = useThemeStore()
  const location = useLocation()

  return (
    <AppBar position='static' elevation={1}>
      <Toolbar>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          Modern React Stack
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            component={Link}
            to='/'
            color='inherit'
            variant={location.pathname === '/' ? 'outlined' : 'text'}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to='/about'
            color='inherit'
            variant={location.pathname === '/about' ? 'outlined' : 'text'}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            About
          </Button>
          <IconButton
            onClick={toggleTheme}
            color='inherit'
            aria-label='Toggle theme'
            sx={{ ml: 1 }}
          >
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
