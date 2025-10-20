import {
  CircularProgress,
  LinearProgress,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CircularProgress> = {
  title: "Material-UI/Progress",
  component: CircularProgress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Material-UI Progress components for showing loading states and progress indicators.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "number" },
    },
    thickness: {
      control: { type: "number" },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CircularProgressSizes: Story = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <CircularProgress size={20} />
      <CircularProgress size={40} />
      <CircularProgress size={60} />
      <CircularProgress size={80} />
    </Stack>
  ),
};

export const CircularProgressColors: Story = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="error" />
      <CircularProgress color="warning" />
      <CircularProgress color="info" />
      <CircularProgress color="success" />
    </Stack>
  ),
};

export const CircularProgressWithValue: Story = {
  render: () => (
    <Stack spacing={3} alignItems="center">
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={25} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            25%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={50} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            50%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" value={75} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            75%
          </Typography>
        </Box>
      </Box>
    </Stack>
  ),
};

export const LinearProgressDemo: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Indeterminate
        </Typography>
        <LinearProgress />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Determinate (25%)
        </Typography>
        <LinearProgress variant="determinate" value={25} />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Determinate (50%)
        </Typography>
        <LinearProgress variant="determinate" value={50} />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Determinate (75%)
        </Typography>
        <LinearProgress variant="determinate" value={75} />
      </Box>
    </Stack>
  ),
};

export const LinearProgressColors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" />
      <LinearProgress color="info" />
      <LinearProgress color="success" />
    </Stack>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: 400 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Page Loading
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          File Upload Progress
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={60} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            60%
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Processing Data
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CircularProgress size={24} />
          <Typography variant="body2">Processing your request...</Typography>
        </Box>
      </Box>
    </Stack>
  ),
};
