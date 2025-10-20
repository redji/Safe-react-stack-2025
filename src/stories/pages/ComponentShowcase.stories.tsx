import {
  Add,
  Delete,
  Edit,
  Save,
  Favorite,
  Share,
  Bookmark,
  Home,
  Person,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
  Chip,
  Avatar,
  IconButton,
  Stack,
  Divider,
  Alert,
  CircularProgress,
  LinearProgress,
  Switch,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "Pages/Component Showcase",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive showcase of all Material-UI components used in the application.",
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Box sx={{ p: 3 }}>
          <Story />
        </Box>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <Box>
      <Typography variant="h3" gutterBottom>
        Material-UI Component Showcase
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        This page demonstrates all the Material-UI components integrated into
        the Modern React Stack.
      </Typography>

      {/* Typography Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Typography
        </Typography>
        <Stack spacing={1}>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="subtitle1">Subtitle 1</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body1">
            Body 1 - Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body2">
            Body 2 - Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="caption">Caption text</Typography>
          <Typography variant="overline">Overline text</Typography>
        </Stack>
      </Paper>

      {/* Buttons Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Buttons
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button color="primary" variant="contained">
              Primary
            </Button>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
            <Button color="error" variant="contained">
              Error
            </Button>
            <Button color="warning" variant="contained">
              Warning
            </Button>
            <Button color="info" variant="contained">
              Info
            </Button>
            <Button color="success" variant="contained">
              Success
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button size="small" variant="contained">
              Small
            </Button>
            <Button size="medium" variant="contained">
              Medium
            </Button>
            <Button size="large" variant="contained">
              Large
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" startIcon={<Add />}>
              Add
            </Button>
            <Button variant="outlined" startIcon={<Edit />}>
              Edit
            </Button>
            <Button variant="text" startIcon={<Save />}>
              Save
            </Button>
            <Button variant="contained" color="error" endIcon={<Delete />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* Cards Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cards
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Simple Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a simple card with basic content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Card with Actions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card includes action buttons.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>U</Avatar>
                  <Box>
                    <Typography variant="h6">User Card</Typography>
                    <Typography variant="body2" color="text.secondary">
                      User information
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2">
                  This card shows user information with an avatar.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Form Controls Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Form Controls
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <TextField label="Text Field" variant="outlined" fullWidth />
              <TextField label="Filled" variant="filled" fullWidth />
              <TextField label="Standard" variant="standard" fullWidth />
              <FormControl fullWidth>
                <InputLabel>Select</InputLabel>
                <Select label="Select">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <FormControlLabel control={<Checkbox />} label="Checkbox" />
              <FormControlLabel control={<Switch />} label="Switch" />
              <FormControl component="fieldset">
                <FormLabel component="legend">Radio Group</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="Option 2"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Feedback Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Feedback Components
        </Typography>
        <Stack spacing={2}>
          <Alert severity="success">This is a success alert!</Alert>
          <Alert severity="info">This is an info alert!</Alert>
          <Alert severity="warning">This is a warning alert!</Alert>
          <Alert severity="error">This is an error alert!</Alert>
          <Box>
            <Typography variant="body2" gutterBottom>
              Progress Indicators
            </Typography>
            <CircularProgress sx={{ mr: 2 }} />
            <LinearProgress sx={{ width: 200 }} />
          </Box>
        </Stack>
      </Paper>

      {/* Navigation Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Navigation & Icons
        </Typography>
        <Stack spacing={2}>
          <Box display="flex" gap={2} flexWrap="wrap">
            <IconButton color="primary">
              <Home />
            </IconButton>
            <IconButton color="secondary">
              <Person />
            </IconButton>
            <IconButton color="error">
              <Favorite />
            </IconButton>
            <IconButton color="info">
              <Share />
            </IconButton>
            <IconButton color="warning">
              <Bookmark />
            </IconButton>
            <IconButton color="success">
              <Settings />
            </IconButton>
          </Box>
          <Box display="flex" gap={2} flexWrap="wrap">
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Success" color="success" />
            <Chip label="Error" color="error" />
            <Chip label="Info" color="info" />
            <Chip label="Warning" color="warning" />
          </Box>
        </Stack>
      </Paper>

      {/* Layout Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Layout Components
        </Typography>
        <Stack spacing={2}>
          <Box display="flex" gap={2} alignItems="center">
            <Paper sx={{ p: 2, flex: 1 }}>Flex Item 1</Paper>
            <Paper sx={{ p: 2, flex: 1 }}>Flex Item 2</Paper>
            <Paper sx={{ p: 2, flex: 1 }}>Flex Item 3</Paper>
          </Box>
          <Divider />
          <Grid container spacing={2}>
            <Grid size={4}>
              <Paper sx={{ p: 2, textAlign: "center" }}>Grid 4</Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, textAlign: "center" }}>Grid 4</Paper>
            </Grid>
            <Grid size={4}>
              <Paper sx={{ p: 2, textAlign: "center" }}>Grid 4</Paper>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  ),
};
