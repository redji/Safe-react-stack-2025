import { Typography, Box, Paper } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from '../../components/Layout'

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main application layout with header, main content area, and footer.',
      },
    },
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Layout>
      <Typography variant='h4' gutterBottom>
        Welcome to the Layout Demo
      </Typography>
      <Typography variant='body1' paragraph>
        This demonstrates the main application layout with header, content area,
        and footer.
      </Typography>
      <Box display='flex' gap={2} flexWrap='wrap'>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant='h6' gutterBottom>
            Card 1
          </Typography>
          <Typography variant='body2'>
            This is a sample card to demonstrate the layout structure.
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant='h6' gutterBottom>
            Card 2
          </Typography>
          <Typography variant='body2'>
            Another sample card showing the responsive grid layout.
          </Typography>
        </Paper>
      </Box>
    </Layout>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Layout>
      <Typography variant='h4' gutterBottom>
        Long Content Demo
      </Typography>
      {Array.from({ length: 10 }, (_, i) => (
        <Paper key={i} sx={{ p: 2, mb: 2 }}>
          <Typography variant='h6' gutterBottom>
            Section {i + 1}
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Paper>
      ))}
    </Layout>
  ),
}
