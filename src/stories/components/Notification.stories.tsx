import { Button, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Notification } from "@/components/Notification";
import { useNotification } from "@/components/useNotification";

const meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

function Demo() {
  const notif = useNotification();
  const [open, setOpen] = useState(false);
  return (
    <Stack gap={2}>
      <Button
        variant="contained"
        onClick={() => notif.show({ message: "Saved", severity: "success" })}
      >
        Show Success
      </Button>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Error (controlled)
      </Button>
      <Notification
        message="An error occurred"
        severity="error"
        open={open}
        onClose={() => setOpen(false)}
      />
      {notif.open && (
        <Notification
          message={notif.message}
          severity={notif.severity}
          open={notif.open}
          onClose={notif.hide}
          autoHideDurationMs={notif.autoHideDurationMs}
        />
      )}
    </Stack>
  );
}

export const Default: Story = {
  args: {
    message: "This is a notification message",
    severity: "info",
    autoHideDurationMs: 4000,
    open: false,
    onClose: () => {},
  },
  render: () => <Demo />,
};
