import { Button, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { ConfirmDialog } from "@/components/ConfirmDialog";

const meta = {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function Demo() {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <Stack gap={2}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Button variant="outlined" onClick={() => setDisabled((v) => !v)}>
        Toggle Disable Confirm
      </Button>
      <ConfirmDialog
        open={open}
        title="Delete item"
        description="Are you sure you want to delete this item?"
        disableConfirm={disabled}
        onCancel={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      />
    </Stack>
  );
}

export const Default: Story = {
  args: {
    open: false,
    title: "Delete item",
    description: "Are you sure you want to delete this item?",
    confirmText: "Delete",
    cancelText: "Cancel",
    disableConfirm: false,
    onConfirm: () => {},
    onCancel: () => {},
  },
  render: () => <Demo />,
};
