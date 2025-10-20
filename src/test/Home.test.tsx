import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock the API module used by Home via alias path to match source imports
vi.mock('@/utils/api', () => ({
  fetchPosts: vi.fn(() =>
    Promise.resolve([
      { id: 1, title: 'Test Post 1', body: 'Body 1', userId: 1 },
      { id: 2, title: 'Test Post 2', body: 'Body 2', userId: 1 },
    ])
  ),
}))

import { fetchPosts } from '@/utils/api'
import { Home } from '../features/Home'
import { ThemeProvider } from '../components/ThemeProvider'

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

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient()
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

// (Mock defined above)

describe('Home Component', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    vi.clearAllMocks()
  })

  it('renders the home page with posts', async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Wait for the content to load
    await waitFor(() => {
      expect(
        screen.getByText('Welcome to Modern React Stack')
      ).toBeInTheDocument()
    })

    // Check if posts are rendered
    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('Test Post 2')).toBeInTheDocument()
  })

  it('shows loading state initially', async () => {
    // Mock a delayed response to ensure loading state is visible
    vi.mocked(fetchPosts).mockImplementationOnce(
      () => new Promise(resolve => setTimeout(() => resolve([
        { id: 1, title: 'Test Post 1', body: 'Body 1', userId: 1 },
        { id: 2, title: 'Test Post 2', body: 'Body 2', userId: 1 },
      ]), 100))
    )

    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Should show loading spinner initially
    expect(screen.getByLabelText('Loading posts')).toBeInTheDocument()
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByText('Welcome to Modern React Stack')).toBeInTheDocument()
    })
  })

  it('handles user interactions', async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>
    )

    // Wait for content to load
    await waitFor(() => {
      expect(
        screen.getByText('Welcome to Modern React Stack')
      ).toBeInTheDocument()
    })

    // Test that post cards are rendered with proper structure
    const postCard = screen.getByText('Test Post 1').closest('[class*="MuiCard"]')
    expect(postCard).toBeInTheDocument()
    
    // Test that post content is rendered
    expect(screen.getByText('Body 1')).toBeInTheDocument()
    expect(screen.getByText('Body 2')).toBeInTheDocument()
  })
})
