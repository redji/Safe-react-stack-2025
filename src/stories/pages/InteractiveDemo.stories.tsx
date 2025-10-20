import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Switch,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Alert,
  LinearProgress,
  Stack,
  Grid,
  Paper,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta = {
  title: 'Pages/Interactive Demo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Interactive demonstration of Material-UI components with live controls and state management.',
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

const InteractiveDemoContent = () => {
  const [textValue, setTextValue] = useState('')
  const [switchValue, setSwitchValue] = useState(false)
  const [sliderValue, setSliderValue] = useState(30)
  const [selectValue, setSelectValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [showProgress, setShowProgress] = useState(false)

  const handleShowAlert = () => {
    setShowAlert(true)
    window.setTimeout(() => setShowAlert(false), 3000)
  }

  const handleShowProgress = () => {
    setShowProgress(true)
    window.setTimeout(() => setShowProgress(false), 3000)
  }

  return (
    <Box>
      <Typography variant='h3' gutterBottom>
        Interactive Component Demo
      </Typography>
      <Typography variant='body1' paragraph color='text.secondary'>
        This page demonstrates interactive Material-UI components with live
        state management. Try interacting with the controls below!
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' gutterBottom>
              Form Controls
            </Typography>
            <Stack spacing={3}>
              <TextField
                label='Text Input'
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
                fullWidth
                helperText={`You typed: "${textValue}"`}
              />
              <FormControl fullWidth>
                <InputLabel>Select Option</InputLabel>
                <Select
                  value={selectValue}
                  label='Select Option'
                  onChange={e => setSelectValue(e.target.value)}
                >
                  <MenuItem value='option1'>Option 1</MenuItem>
                  <MenuItem value='option2'>Option 2</MenuItem>
                  <MenuItem value='option3'>Option 3</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch
                    checked={switchValue}
                    onChange={e => setSwitchValue(e.target.checked)}
                  />
                }
                label={`Switch is ${switchValue ? 'ON' : 'OFF'}`}
              />
              <Box>
                <Typography gutterBottom>
                  Slider Value: {sliderValue}
                </Typography>
                <Slider
                  value={sliderValue}
                  onChange={(_, value) => setSliderValue(value as number)}
                  min={0}
                  max={100}
                  step={1}
                />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' gutterBottom>
              Actions & Feedback
            </Typography>
            <Stack spacing={3}>
              <Button variant='contained' onClick={handleShowAlert} fullWidth>
                Show Alert
              </Button>
              <Button variant='outlined' onClick={handleShowProgress} fullWidth>
                Show Progress
              </Button>
              {showAlert && (
                <Alert severity='success' onClose={() => setShowAlert(false)}>
                  This is a success alert! It will disappear in 3 seconds.
                </Alert>
              )}
              {showProgress && (
                <Box>
                  <Typography variant='body2' gutterBottom>
                    Processing...
                  </Typography>
                  <LinearProgress />
                </Box>
              )}
              <Box display='flex' gap={1} flexWrap='wrap'>
                <Chip label='Interactive' color='primary' />
                <Chip label='Demo' color='secondary' />
                <Chip label='Material-UI' color='success' />
                <Chip label='Storybook' color='info' />
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' gutterBottom>
              Current State
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      Text Input
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {textValue || 'No text entered'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      Switch State
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {switchValue ? 'Enabled' : 'Disabled'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      Slider Value
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {sliderValue}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant='h6' gutterBottom>
                      Selected Option
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {selectValue || 'None selected'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export const InteractiveDemo: Story = {
  render: () => <InteractiveDemoContent />,
}
