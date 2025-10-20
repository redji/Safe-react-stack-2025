import { AlertColor } from "@mui/material";
import { useCallback, useState } from "react";

export interface UseNotificationState {
  open: boolean;
  message: string;
  severity: AlertColor;
  autoHideDurationMs?: number;
  show: (opts: {
    message: string;
    severity?: AlertColor;
    autoHideDurationMs?: number;
  }) => void;
  hide: () => void;
}

export function useNotification(defaults?: {
  severity?: AlertColor;
  autoHideDurationMs?: number;
}): UseNotificationState {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>(
    defaults?.severity ?? "info",
  );
  const [autoHideDurationMs, setAutoHideDuration] = useState<
    number | undefined
  >(defaults?.autoHideDurationMs ?? 4000);

  const show = useCallback(
    (opts: {
      message: string;
      severity?: AlertColor;
      autoHideDurationMs?: number;
    }) => {
      setMessage(opts.message);
      if (opts.severity) setSeverity(opts.severity);
      if (opts.autoHideDurationMs !== undefined)
        setAutoHideDuration(opts.autoHideDurationMs);
      setOpen(true);
    },
    [],
  );

  const hide = useCallback(() => setOpen(false), []);

  return { open, message, severity, autoHideDurationMs, show, hide };
}

export default useNotification;
