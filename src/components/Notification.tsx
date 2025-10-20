import { Alert, AlertColor, Snackbar } from "@mui/material";
import { SyntheticEvent } from "react";

export interface NotificationProps {
  message: string;
  severity?: AlertColor;
  autoHideDurationMs?: number;
  open?: boolean;
  onClose?: () => void;
}

export function Notification({
  message,
  severity = "info",
  autoHideDurationMs = 4000,
  open = true,
  onClose,
}: NotificationProps) {
  const handleClose = (_: SyntheticEvent | unknown, reason?: string) => {
    if (reason === "clickaway") return;
    onClose?.();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDurationMs}
      onClose={handleClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
