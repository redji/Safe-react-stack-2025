import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import App from '../App'
import { ThemeProvider } from '../components/ThemeProvider'

// Mock the API function
vi.mock('../utils/api', () => ({
  fetchPosts: vi.fn(() =>
    Promise.resolve([
      { id: 1, title: 'Test Post', body: 'Test body', userId: 1 },
    ])
  ),
}))

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        gcTime: 0,
      },
    },
  })

const TestWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = createTestQueryClient()
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

describe('App', () => {
  it('renders the home page', async () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )

    // Wait for the content to load
    expect(
      await screen.findByText('Welcome to Modern React Stack')
    ).toBeInTheDocument()
  })
})
