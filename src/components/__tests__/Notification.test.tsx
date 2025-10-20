import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

import { Notification } from '../Notification'
import { ThemeProvider } from '../ThemeProvider'

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

describe('Notification', () => {
  it('renders message and default severity', () => {
    render(
      <TestWrapper>
        <Notification message='Saved successfully' />
      </TestWrapper>
    )
    expect(screen.getByText('Saved successfully')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('supports different severities', () => {
    render(
      <TestWrapper>
        <Notification message='Oops' severity='error' />
      </TestWrapper>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Oops')).toBeInTheDocument()
  })

  it('calls onClose when close icon clicked', async () => {
    const onClose = vi.fn()
    render(
      <TestWrapper>
        <Notification message='Closable' onClose={onClose} />
      </TestWrapper>
    )
    const closeButton = screen.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })
})
