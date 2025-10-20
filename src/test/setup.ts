import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from 'vitest'

import '@testing-library/jest-dom'
import { logger } from '@/utils/logger'

// Conditionally import MSW only in test environment
interface MSWServer {
  listen(): void
  resetHandlers(): void
  close(): void
}

let server: MSWServer | null = null

beforeAll(async () => {
  // Only try to import MSW in test environment
  try {
    const isTestEnv =
      import.meta.env?.MODE === 'test' || import.meta.env?.VITEST === 'true'
    if (isTestEnv) {
      const { server: mswServer } = await import('../mocks/server')
      server = mswServer as MSWServer
      server.listen()
      logger.debug('MSW server initialized successfully for tests')
    }
  } catch (error) {
    logger.warn('MSW not available in test environment', {
      error: error instanceof Error ? error.message : String(error),
    })
  }
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => {
  cleanup()
  if (server) {
    server.resetHandlers()
  }
})

// Clean up after the tests are finished
afterAll(() => {
  if (server) {
    server.close()
  }
})
