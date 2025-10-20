import { TextField, Stack, Box, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextField> = {
  title: "Material-UI/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Material-UI TextField component for user input with various variants and states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
    multiline: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text Field",
  },
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <TextField label="Small" size="small" variant="outlined" />
      <TextField label="Medium" size="medium" variant="outlined" />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <TextField label="Primary" color="primary" variant="outlined" />
      <TextField label="Secondary" color="secondary" variant="outlined" />
      <TextField label="Error" color="error" variant="outlined" />
      <TextField label="Warning" color="warning" variant="outlined" />
      <TextField label="Info" color="info" variant="outlined" />
      <TextField label="Success" color="success" variant="outlined" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <TextField label="Normal" variant="outlined" />
      <TextField label="Disabled" variant="outlined" disabled />
      <TextField label="Required" variant="outlined" required />
      <TextField
        label="Error"
        variant="outlined"
        error
        helperText="This field has an error"
      />
    </Stack>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        helperText="Must be at least 8 characters"
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        helperText="We will never share your email"
      />
      <TextField
        label="Error Field"
        variant="outlined"
        error
        helperText="This field is required"
      />
    </Stack>
  ),
};

export const Multiline: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 400 }}>
      <TextField
        label="Multiline"
        multiline
        rows={4}
        variant="outlined"
        placeholder="Enter your message here..."
      />
      <TextField
        label="Auto Resize"
        multiline
        maxRows={4}
        variant="outlined"
        placeholder="This field will auto-resize..."
      />
    </Stack>
  ),
};

export const FormExample: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Typography variant="h6" gutterBottom>
        Contact Form
      </Typography>
      <Stack spacing={3}>
        <TextField label="Full Name" variant="outlined" required fullWidth />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
        />
        <TextField label="Phone" type="tel" variant="outlined" fullWidth />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          placeholder="Tell us about your project..."
        />
      </Stack>
    </Box>
  ),
};
