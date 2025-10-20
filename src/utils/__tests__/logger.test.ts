/**
 * Tests for the logging utility
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import { logger, Logger, LogLevel } from '../logger'

// Mock console methods
const mockConsole = {
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  time: vi.fn(),
  timeEnd: vi.fn(),
}

// Note: We avoid manipulating import.meta.env directly; instead we
// configure the logger per test to ensure deterministic behavior.

describe('Logger', () => {
  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks()

    // Mock console
    Object.assign(console, mockConsole)

    // Clear logger buffer
    logger.clearLogs()

    // Ensure logs are recorded and console logging is enabled in tests
    logger.updateConfig({
      level: LogLevel.DEBUG,
      enableConsole: true,
      enableRemote: false,
      serviceName: 'test',
      version: '1.0.0',
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('Basic logging functionality', () => {
    it('should log debug messages', () => {
      logger.debug('Test debug message')

      const logs = logger.getLogs()
      expect(logs).toHaveLength(1)
      expect(logs[0].level).toBe(LogLevel.DEBUG)
      expect(logs[0].message).toBe('Test debug message')
      expect(mockConsole.debug).toHaveBeenCalled()
    })

    it('should log info messages', () => {
      logger.info('Test info message')

      const logs = logger.getLogs()
      expect(logs).toHaveLength(1)
      expect(logs[0].level).toBe(LogLevel.INFO)
      expect(logs[0].message).toBe('Test info message')
      expect(mockConsole.info).toHaveBeenCalled()
    })

    it('should log warning messages', () => {
      const error = new Error('Test error')
      logger.warn('Test warning message', { userId: 123 }, error)

      const logs = logger.getLogs()
      expect(logs).toHaveLength(1)
      expect(logs[0].level).toBe(LogLevel.WARN)
      expect(logs[0].message).toBe('Test warning message')
      expect(logs[0].context).toEqual({ userId: 123 })
      expect(logs[0].error).toBe(error)
      expect(mockConsole.warn).toHaveBeenCalled()
    })

    it('should log error messages', () => {
      const error = new Error('Test error')
      logger.error('Test error message', { component: 'TestComponent' }, error)

      const logs = logger.getLogs()
      expect(logs).toHaveLength(1)
      expect(logs[0].level).toBe(LogLevel.ERROR)
      expect(logs[0].message).toBe('Test error message')
      expect(logs[0].context).toEqual({ component: 'TestComponent' })
      expect(logs[0].error).toBe(error)
      expect(mockConsole.error).toHaveBeenCalled()
    })
  })

  describe('Log level filtering', () => {
    it('should respect log level configuration', () => {
      // Create a logger with WARN level
      const warnLogger = new Logger({
        level: LogLevel.WARN,
        enableConsole: true,
        enableRemote: false,
        serviceName: 'test',
        version: '1.0.0',
      })

      warnLogger.debug('Debug message')
      warnLogger.info('Info message')
      warnLogger.warn('Warning message')
      warnLogger.error('Error message')

      const logs = warnLogger.getLogs()
      expect(logs).toHaveLength(2) // Only WARN and ERROR
      expect(logs[0].level).toBe(LogLevel.WARN)
      expect(logs[1].level).toBe(LogLevel.ERROR)

      // Only warn and error should be called on console
      expect(mockConsole.debug).not.toHaveBeenCalled()
      expect(mockConsole.info).not.toHaveBeenCalled()
      expect(mockConsole.warn).toHaveBeenCalled()
      expect(mockConsole.error).toHaveBeenCalled()
    })
  })

  describe('Performance logging', () => {
    it('should support time and timeEnd', () => {
      logger.time('test-operation')
      logger.timeEnd('test-operation')

      expect(mockConsole.time).toHaveBeenCalledWith('test-operation')
      expect(mockConsole.timeEnd).toHaveBeenCalledWith('test-operation')
    })
  })

  describe('Log buffer management', () => {
    it('should maintain log buffer', () => {
      // Add multiple logs
      for (let i = 0; i < 5; i++) {
        logger.info(`Message ${i}`)
      }

      const logs = logger.getLogs()
      expect(logs).toHaveLength(5)
      expect(logs[0].message).toBe('Message 0')
      expect(logs[4].message).toBe('Message 4')
    })

    it('should clear logs', () => {
      logger.info('Test message')
      expect(logger.getLogs()).toHaveLength(1)

      logger.clearLogs()
      expect(logger.getLogs()).toHaveLength(0)
    })
  })

  describe('Configuration updates', () => {
    it('should allow configuration updates', () => {
      logger.updateConfig({ level: LogLevel.ERROR })

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warning message')
      logger.error('Error message')

      const logs = logger.getLogs()
      // Should only have the error message (plus any previous logs)
      const newLogs = logs.filter(log => log.message.includes('message'))
      expect(newLogs).toHaveLength(1)
      expect(newLogs[0].level).toBe(LogLevel.ERROR)
    })
  })

  describe('Message formatting', () => {
    it('should format messages with context and errors', () => {
      const error = new Error('Test error')
      logger.error('Test message', { key: 'value' }, error)

      const logs = logger.getLogs()
      const log = logs[0]

      expect(log.timestamp).toBeDefined()
      expect(log.message).toBe('Test message')
      expect(log.context).toEqual({ key: 'value' })
      expect(log.error).toBe(error)
    })
  })
})
