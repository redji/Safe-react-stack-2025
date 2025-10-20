import { Alert, AlertTitle, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Alert> = {
  title: "Material-UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Material-UI Alert component for displaying important messages to users.",
      },
    },
  },
  argTypes: {
    severity: {
      control: { type: "select" },
      options: ["error", "warning", "info", "success"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an alert message.",
  },
};

export const Severities: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="error">This is an error alert!</Alert>
      <Alert severity="warning">This is a warning alert!</Alert>
      <Alert severity="info">This is an info alert!</Alert>
      <Alert severity="success">This is a success alert!</Alert>
    </Stack>
  ),
};

export const WithTitles: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert with a title!
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert with a title!
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert with a title!
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert with a title!
      </Alert>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="info" variant="standard">
        Standard variant alert
      </Alert>
      <Alert severity="info" variant="outlined">
        Outlined variant alert
      </Alert>
      <Alert severity="info" variant="filled">
        Filled variant alert
      </Alert>
    </Stack>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Alert severity="info" onClose={() => {}}>
        This alert can be dismissed
      </Alert>
      <Alert severity="warning" onClose={() => {}}>
        <AlertTitle>Warning</AlertTitle>
        This warning alert can also be dismissed
      </Alert>
    </Stack>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 500 }}>
      <Alert severity="info">
        <AlertTitle>System Maintenance</AlertTitle>
        We will be performing scheduled maintenance on our servers from 2:00 AM
        to 4:00 AM EST on Sunday, January 15th. During this time, some features
        may be temporarily unavailable. We apologize for any inconvenience.
      </Alert>
      <Alert severity="success">
        <AlertTitle>Account Created Successfully</AlertTitle>
        Your account has been created and you can now access all features of our
        platform. Please check your email for a verification link to complete
        the setup process.
      </Alert>
    </Stack>
  ),
};
