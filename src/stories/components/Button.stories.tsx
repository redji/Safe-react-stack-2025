import { Add, Delete, Edit, Save } from '@mui/icons-material'
import { Button, ButtonGroup, Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  title: 'Material-UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Material-UI Button component with various variants, colors, and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} direction='row'>
      <Button variant='text'>Text</Button>
      <Button variant='outlined'>Outlined</Button>
      <Button variant='contained'>Contained</Button>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <Button color='primary' variant='contained'>
          Primary
        </Button>
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
        <Button color='error' variant='contained'>
          Error
        </Button>
        <Button color='warning' variant='contained'>
          Warning
        </Button>
        <Button color='info' variant='contained'>
          Info
        </Button>
        <Button color='success' variant='contained'>
          Success
        </Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button color='primary' variant='outlined'>
          Primary
        </Button>
        <Button color='secondary' variant='outlined'>
          Secondary
        </Button>
        <Button color='error' variant='outlined'>
          Error
        </Button>
        <Button color='warning' variant='outlined'>
          Warning
        </Button>
        <Button color='info' variant='outlined'>
          Info
        </Button>
        <Button color='success' variant='outlined'>
          Success
        </Button>
      </Stack>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} direction='row' alignItems='center'>
      <Button size='small' variant='contained'>
        Small
      </Button>
      <Button size='medium' variant='contained'>
        Medium
      </Button>
      <Button size='large' variant='contained'>
        Large
      </Button>
    </Stack>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Stack spacing={2} direction='row'>
      <Button variant='contained' startIcon={<Add />}>
        Add
      </Button>
      <Button variant='outlined' startIcon={<Edit />}>
        Edit
      </Button>
      <Button variant='text' startIcon={<Save />}>
        Save
      </Button>
      <Button variant='contained' color='error' endIcon={<Delete />}>
        Delete
      </Button>
    </Stack>
  ),
}

export const ButtonGroups: Story = {
  render: () => (
    <Stack spacing={4}>
      <ButtonGroup variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='outlined'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant='text'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Stack spacing={2} direction='row'>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
    </Stack>
  ),
}
