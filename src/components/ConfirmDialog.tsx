import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { ReactNode } from 'react'

export interface ConfirmDialogProps {
  open: boolean
  title?: ReactNode
  description?: ReactNode
  confirmText?: string
  cancelText?: string
  disableConfirm?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDialog({
  open,
  title = 'Confirm action',
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  disableConfirm = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='confirm-dialog-title'
    >
      {title ? (
        <DialogTitle id='confirm-dialog-title'>{title}</DialogTitle>
      ) : null}
      {description ? (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button
          variant='text'
          onClick={onCancel}
          color='inherit'
          aria-label='cancel'
        >
          {cancelText}
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={onConfirm}
          disabled={disableConfirm}
          aria-label='confirm'
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
