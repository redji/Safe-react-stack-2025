import { Typography, Box, Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Typography> = {
  title: 'Material-UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Material-UI Typography component for displaying text with consistent styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
        'button',
        'inherit',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'text.primary',
        'text.secondary',
        'error',
      ],
    },
    align: {
      control: { type: 'select' },
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Typography Text',
  },
}

export const Headings: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant='h1' component='h1'>
        Heading 1
      </Typography>
      <Typography variant='h2' component='h2'>
        Heading 2
      </Typography>
      <Typography variant='h3' component='h3'>
        Heading 3
      </Typography>
      <Typography variant='h4' component='h4'>
        Heading 4
      </Typography>
      <Typography variant='h5' component='h5'>
        Heading 5
      </Typography>
      <Typography variant='h6' component='h6'>
        Heading 6
      </Typography>
    </Stack>
  ),
}

export const Subtitles: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant='subtitle1'>
        Subtitle 1 - Lorem ipsum dolor sit amet
      </Typography>
      <Typography variant='subtitle2'>
        Subtitle 2 - Lorem ipsum dolor sit amet
      </Typography>
    </Stack>
  ),
}

export const BodyText: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant='body1'>
        Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
      <Typography variant='body2'>
        Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography color='primary'>Primary Color</Typography>
      <Typography color='secondary'>Secondary Color</Typography>
      <Typography color='text.primary'>Text Primary</Typography>
      <Typography color='text.secondary'>Text Secondary</Typography>
      <Typography color='error'>Error Color</Typography>
    </Stack>
  ),
}

export const Alignment: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Typography align='left'>Left aligned text</Typography>
      <Typography align='center'>Center aligned text</Typography>
      <Typography align='right'>Right aligned text</Typography>
      <Typography align='justify'>
        Justified text that spreads across the full width of the container. This
        demonstrates how text can be justified to create even margins.
      </Typography>
    </Stack>
  ),
}

export const CaptionAndOverline: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant='caption'>
        Caption text - Small text for captions
      </Typography>
      <Typography variant='overline'>
        Overline text - Small uppercase text
      </Typography>
    </Stack>
  ),
}

export const ResponsiveTypography: Story = {
  render: () => (
    <Box>
      <Typography
        variant='h3'
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
        }}
      >
        Responsive Heading
      </Typography>
      <Typography
        variant='body1'
        sx={{
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
        }}
      >
        This text adjusts its size based on the screen size. It&apos;s smaller
        on mobile devices and larger on desktop screens.
      </Typography>
    </Box>
  ),
}

export const TextWithGutter: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant='h4' gutterBottom>
        Heading with Bottom Gutter
      </Typography>
      <Typography variant='body1' paragraph>
        This paragraph has bottom margin (paragraph prop).
      </Typography>
      <Typography variant='body1'>
        This paragraph has no bottom margin.
      </Typography>
    </Stack>
  ),
}
