import { Box, Typography, Paper, Button, Stack, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router-dom'

import { theme, darkTheme } from '../../theme'

const meta: Meta = {
  title: 'Pages/Theme Demo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Demonstration of the light and dark themes with Material-UI components.',
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Box sx={{ p: 3 }}>
          <Story />
        </Box>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const ThemeDemoContent = () => (
  <Box>
    <Typography variant='h3' gutterBottom>
      Theme Demonstration
    </Typography>
    <Typography variant='body1' paragraph color='text.secondary'>
      This page shows how components look in different themes. Use the
      background selector in the toolbar to switch between light and dark
      themes.
    </Typography>

    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant='h5' gutterBottom>
            Color Palette
          </Typography>
          <Stack spacing={2}>
            <Box display='flex' gap={2} flexWrap='wrap'>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Primary
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Secondary
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'error.main',
                  color: 'error.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Error
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'warning.main',
                  color: 'warning.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Warning
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'info.main',
                  color: 'info.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Info
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: 'success.main',
                  color: 'success.contrastText',
                  minWidth: 100,
                  textAlign: 'center',
                }}
              >
                Success
              </Paper>
            </Box>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant='h5' gutterBottom>
            Typography
          </Typography>
          <Stack spacing={1}>
            <Typography variant='h1' color='primary'>
              H1 Primary
            </Typography>
            <Typography variant='h2' color='secondary'>
              H2 Secondary
            </Typography>
            <Typography variant='h3' color='text.primary'>
              H3 Text Primary
            </Typography>
            <Typography variant='h4' color='text.secondary'>
              H4 Text Secondary
            </Typography>
            <Typography variant='body1'>Body 1 - Regular text</Typography>
            <Typography variant='body2' color='text.secondary'>
              Body 2 - Secondary text
            </Typography>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant='h5' gutterBottom>
            Buttons
          </Typography>
          <Stack spacing={2}>
            <Stack direction='row' spacing={2} flexWrap='wrap'>
              <Button variant='contained' color='primary'>
                Primary
              </Button>
              <Button variant='contained' color='secondary'>
                Secondary
              </Button>
              <Button variant='outlined' color='primary'>
                Outlined
              </Button>
              <Button variant='text' color='primary'>
                Text
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant='h5' gutterBottom>
            Surface Colors
          </Typography>
          <Stack spacing={2}>
            <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
              <Typography variant='body2'>Background Paper</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
              <Typography variant='body2'>Background Default</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: 'grey.100' }}>
              <Typography variant='body2'>Grey 100</Typography>
            </Paper>
            <Paper sx={{ p: 2, bgcolor: 'grey.200' }}>
              <Typography variant='body2'>Grey 200</Typography>
            </Paper>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant='h5' gutterBottom>
            Component Examples
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant='h6' gutterBottom>
                  Elevation 1
                </Typography>
                <Typography variant='body2'>Subtle shadow</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant='h6' gutterBottom>
                  Elevation 3
                </Typography>
                <Typography variant='body2'>Medium shadow</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={6} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant='h6' gutterBottom>
                  Elevation 6
                </Typography>
                <Typography variant='body2'>Strong shadow</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={12} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant='h6' gutterBottom>
                  Elevation 12
                </Typography>
                <Typography variant='body2'>Very strong shadow</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Box>
)

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <ThemeDemoContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Components displayed in the light theme.',
      },
    },
  },
}

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <ThemeDemoContent />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Components displayed in the dark theme.',
      },
    },
  },
}
