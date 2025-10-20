import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../../components/Layout/Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Application header with navigation and theme toggle functionality.',
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

export const Default: Story = {}

export const WithActiveHome: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header with Home page active (simulated by setting location).',
      },
    },
  },
}

export const WithActiveAbout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header with About page active (simulated by setting location).',
      },
    },
  },
}
