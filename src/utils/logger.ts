/**
 * Logging utility for the Modern React Stack application
 * Provides structured logging with different levels and environment-aware behavior
 */

import { getLoggingConfig } from '@/config/logging'

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  context?: Record<string, unknown>
  error?: Error
}

export interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableRemote: boolean
  remoteEndpoint?: string
  serviceName: string
  version: string
}

class Logger {
  private config: LoggerConfig
  private logBuffer: LogEntry[] = []
  private maxBufferSize = 100

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      ...getLoggingConfig(),
      ...config,
    }
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error,
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level
  }

  private formatMessage(entry: LogEntry): string {
    const levelName = LogLevel[entry.level]
    const contextStr = entry.context ? ` ${JSON.stringify(entry.context)}` : ''
    const errorStr = entry.error ? ` Error: ${entry.error.message}` : ''

    return `[${entry.timestamp}] ${levelName}: ${entry.message}${contextStr}${errorStr}`
  }

  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): void {
    if (!this.shouldLog(level)) {
      return
    }

    const entry = this.createLogEntry(level, message, context, error)

    // Add to buffer
    this.logBuffer.push(entry)
    if (this.logBuffer.length > this.maxBufferSize) {
      this.logBuffer.shift()
    }

    // Console logging
    if (this.config.enableConsole) {
      const formattedMessage = this.formatMessage(entry)

      switch (level) {
        case LogLevel.DEBUG:
          console.debug(formattedMessage)
          break
        case LogLevel.INFO:
          console.info(formattedMessage)
          break
        case LogLevel.WARN:
          console.warn(formattedMessage)
          break
        case LogLevel.ERROR:
          console.error(formattedMessage)
          break
      }
    }

    // Remote logging (for production monitoring)
    if (this.config.enableRemote && this.config.remoteEndpoint) {
      this.sendToRemote(entry).catch(() => {
        // Silently fail remote logging to avoid infinite loops
      })
    }
  }

  private async sendToRemote(entry: LogEntry): Promise<void> {
    try {
      await fetch(this.config.remoteEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...entry,
          service: this.config.serviceName,
          version: this.config.version,
        }),
      })
    } catch {
      // Silently fail to avoid infinite logging loops
    }
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context)
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context)
  }

  warn(
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): void {
    this.log(LogLevel.WARN, message, context, error)
  }

  error(
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): void {
    this.log(LogLevel.ERROR, message, context, error)
  }

  // Utility methods
  getLogs(): LogEntry[] {
    return [...this.logBuffer]
  }

  clearLogs(): void {
    this.logBuffer = []
  }

  updateConfig(newConfig: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }

  // Performance logging
  time(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.time(label)
    }
  }

  timeEnd(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.timeEnd(label)
    }
  }
}

// Create and export a singleton instance
export const logger = new Logger()

// Export the class for custom instances
export { Logger }

// Convenience exports for common use cases
export const log = {
  debug: (message: string, context?: Record<string, unknown>) =>
    logger.debug(message, context),
  info: (message: string, context?: Record<string, unknown>) =>
    logger.info(message, context),
  warn: (message: string, context?: Record<string, unknown>, error?: Error) =>
    logger.warn(message, context, error),
  error: (message: string, context?: Record<string, unknown>, error?: Error) =>
    logger.error(message, context, error),
  time: (label: string) => logger.time(label),
  timeEnd: (label: string) => logger.timeEnd(label),
}
