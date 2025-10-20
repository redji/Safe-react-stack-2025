/**
 * Logging configuration for the Modern React Stack application
 * Centralized configuration for logging behavior across different environments
 */

import { LogLevel, LoggerConfig } from "@/utils/logger";

export interface LoggingEnvironmentConfig {
  development: LoggerConfig;
  production: LoggerConfig;
  test: LoggerConfig;
}

export function getLoggingEnvironmentConfig(): LoggingEnvironmentConfig {
  return {
    development: {
      level: LogLevel.DEBUG,
      enableConsole: true,
      enableRemote: false,
      serviceName: "modern-react-stack",
      version: "1.0.0",
    },
    production: {
      level: LogLevel.WARN,
      enableConsole: false,
      enableRemote: true,
      remoteEndpoint: undefined, // Will be set from env in getLoggingConfig
      serviceName: "modern-react-stack",
      version: "1.0.0",
    },
    test: {
      level: LogLevel.ERROR, // Only log errors in tests to reduce noise
      enableConsole: false,
      enableRemote: false,
      serviceName: "modern-react-stack-test",
      version: "1.0.0",
    },
  };
}

/**
 * Get the appropriate logging configuration for the current environment
 */
export function getLoggingConfig(): LoggerConfig {
  try {
    const env = import.meta.env?.MODE || "development";
    const loggingConfig = getLoggingEnvironmentConfig();

    // Override with environment variables if present
    const baseConfig =
      loggingConfig[env as keyof LoggingEnvironmentConfig] ||
      loggingConfig.development;

    return {
      ...baseConfig,
      level: getLogLevelFromEnv() ?? baseConfig.level,
      enableConsole: getConsoleEnabledFromEnv() ?? baseConfig.enableConsole,
      enableRemote: getRemoteEnabledFromEnv() ?? baseConfig.enableRemote,
      remoteEndpoint:
        import.meta.env?.VITE_REMOTE_LOGGING_ENDPOINT ||
        baseConfig.remoteEndpoint,
    };
  } catch {
    // Fallback to development config if environment access fails
    const loggingConfig = getLoggingEnvironmentConfig();
    return loggingConfig.development;
  }
}

function getLogLevelFromEnv(): LogLevel | null {
  try {
    const envLevel = import.meta.env?.VITE_LOG_LEVEL?.toUpperCase();
    switch (envLevel) {
      case "DEBUG":
        return LogLevel.DEBUG;
      case "INFO":
        return LogLevel.INFO;
      case "WARN":
        return LogLevel.WARN;
      case "ERROR":
        return LogLevel.ERROR;
      case "NONE":
        return LogLevel.NONE;
      default:
        return null;
    }
  } catch {
    return null;
  }
}

function getConsoleEnabledFromEnv(): boolean | null {
  try {
    const envValue = import.meta.env?.VITE_ENABLE_CONSOLE_LOGGING;
    if (envValue === undefined) return null;
    return envValue === "true";
  } catch {
    return null;
  }
}

function getRemoteEnabledFromEnv(): boolean | null {
  try {
    const envValue = import.meta.env?.VITE_ENABLE_REMOTE_LOGGING;
    if (envValue === undefined) return null;
    return envValue === "true";
  } catch {
    return null;
  }
}

/**
 * Environment-specific logging utilities
 */
export const loggingUtils = {
  /**
   * Check if logging is enabled for the current environment
   */
  isLoggingEnabled(): boolean {
    try {
      return (
        import.meta.env?.DEV || import.meta.env?.VITE_ENABLE_LOGGING === "true"
      );
    } catch {
      return true; // Default to enabled if environment access fails
    }
  },

  /**
   * Get the current environment name
   */
  getEnvironment(): string {
    try {
      return import.meta.env?.MODE || "development";
    } catch {
      return "development";
    }
  },

  /**
   * Check if we're in a test environment
   */
  isTestEnvironment(): boolean {
    try {
      return (
        import.meta.env?.MODE === "test" || import.meta.env?.VITEST === "true"
      );
    } catch {
      return false;
    }
  },

  /**
   * Check if we're in a development environment
   */
  isDevelopmentEnvironment(): boolean {
    try {
      return import.meta.env?.DEV === true;
    } catch {
      return true; // Default to development if environment access fails
    }
  },

  /**
   * Check if we're in a production environment
   */
  isProductionEnvironment(): boolean {
    try {
      return import.meta.env?.PROD === true;
    } catch {
      return false;
    }
  },
};
