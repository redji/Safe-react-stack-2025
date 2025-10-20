# Modern React Stack

A comprehensive React project setup with modern development practices, TypeScript, Material-UI, and comprehensive tooling.

## 🚀 Features

- **React 19.2** with TypeScript
- **Vite** for fast development and building
- **Material-UI (MUI)** for comprehensive UI components
- **React Router** for client-side routing
- **Zustand** for lightweight state management
- **TanStack Query** for server state management
- **Vitest** for testing with React Testing Library
- **Storybook** for component development and documentation
- **ESLint & Prettier** for code quality and formatting
- **Husky** for Git hooks
- **Commitizen** for conventional commits
- **GitHub Actions** for CI/CD

## 📁 Project Structure

Following modern React best practices for organizing applications:

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Header, Footer)
│   └── NotFound.tsx    # 404 page component
├── features/           # Feature-based organization
│   ├── Home/          # Home page feature
│   └── About/         # About page feature
├── hooks/             # Custom React hooks
│   └── useThemeStore.ts
├── utils/             # Utility functions
│   ├── api.ts         # API functions
│   └── logger.ts      # Structured logging utility
├── config/            # Configuration files
│   └── logging.ts     # Logging configuration
├── types/             # TypeScript type definitions
├── assets/            # Static assets
├── test/              # Test files
│   ├── setup.ts       # Test setup
│   └── App.test.tsx   # App tests
└── stories/           # Storybook stories
    ├── components/    # Component stories
    ├── pages/         # Page stories
    └── *.stories.tsx  # Story files
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd modern-react-stack

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

#### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Storybook

- `npm run storybook` - Start Storybook development server (port 6006)
- `npm run build-storybook` - Build Storybook for production
- `npm run build:all` - Build both app and Storybook
- `npm run quality:storybook` - Run Storybook quality checks

#### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

#### Testing

- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode

#### Quality Assurance

- `npm run quality:pre-build` - Run pre-build quality checks
- `npm run quality:post-build` - Run post-build quality checks
- `npm run quality:full` - Run all quality checks
- `npm run quality:storybook` - Run Storybook quality checks
- `npm run clean` - Run all quality checks (deadcode, lint, type-check, test)

#### Dependencies

- `npm run deps:check` - Check for dependency updates
- `npm run deps:update` - Update dependencies
- `npm run deps:audit` - Audit dependencies for security issues
- `npm run deps:unused` - Find unused dependencies
- `npm run deps:circular` - Check for circular dependencies
- `npm run deps:graph` - Generate dependency graph visualization

#### Bundle Analysis

- `npm run size:check` - Check bundle size limits
- `npm run size:why` - Analyze bundle size
- `npm run analyze` - Visualize bundle composition
- `npm run build:analyze` - Build and analyze bundle

#### Dead Code Elimination

- `npm run deadcode` - Find unused code and dependencies
- `npm run deadcode:fix` - Automatically fix dead code issues

#### Git & Deployment

- `npm run commit` - Interactive commit with Commitizen
- `npm run ci` - Run CI pipeline locally

## 📚 Storybook

The project includes a comprehensive Storybook setup for component development and documentation:

### Features

- **Material-UI Integration**: Full theme support with light/dark modes
- **Interactive Controls**: Live component property editing
- **Documentation**: Auto-generated component documentation
- **Accessibility Testing**: Built-in a11y addon for accessibility checks
- **Visual Testing**: Chromatic integration for visual regression testing
- **TypeScript Support**: Full TypeScript integration with type checking

### Available Stories

- **Components**: All MUI components (Button, TextField, Card, Grid, Progress, Alert, Typography, ConfirmDialog, Notification)
- **Layout**: Header, Footer, and Layout components
- **Pages**: Demo pages showcasing component combinations
- **Interactive Demos**: Live examples with user interactions

### Usage

```bash
# Start Storybook development server (runs on port 6006)
npm run storybook

# Build Storybook for production
npm run build-storybook

# Build both app and Storybook
npm run build:all

# Run Storybook quality checks
npm run quality:storybook
```

### Story Structure

Stories are organized by component type:

```
src/stories/
├── components/          # Individual component stories
│   ├── Button.stories.tsx
│   ├── TextField.stories.tsx
│   └── ...
├── pages/              # Page-level stories
│   ├── ComponentShowcase.stories.tsx
│   ├── ThemeDemo.stories.tsx
│   └── InteractiveDemo.stories.tsx
└── *.stories.tsx       # Additional story files
```

## 🧪 Testing

The project uses Vitest with React Testing Library for testing:

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📦 Code Quality

### ESLint Configuration

- TypeScript support
- React and React Hooks rules
- Accessibility rules (jsx-a11y)
- Import organization
- Prettier integration

### Prettier Configuration

- Single quotes
- No semicolons
- 2-space indentation
- Trailing commas

### Git Hooks

- **Pre-commit**: Runs linting and formatting on staged files
- **Commit-msg**: Validates commit messages using conventional commits

## 🚀 Deployment

### GitHub Actions

The project includes two GitHub Actions workflows:

1. **CI Pipeline** (`ci.yml`):
   - Runs on push and pull requests
   - Tests on Node.js 18 and 20
   - Type checking, linting, formatting, testing, and building
   - Uploads coverage to Codecov

2. **Deploy Pipeline** (`deploy.yml`):
   - Runs on push to main branch
   - Builds and deploys to Vercel

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
```

## 🎨 Styling

The project uses Material-UI (MUI) with a comprehensive design system:

- **Material Design**: Google's Material Design principles
- **Theme System**: Customizable light/dark themes
- **Component Library**: Pre-built, accessible components
- **Emotion Styling**: CSS-in-JS with Emotion
- **Responsive Design**: Built-in responsive utilities
- **TypeScript Support**: Full type safety for styling

## ⚛️ React 19.2 Features

This project leverages the latest React 19.2 features and follows current best practices:

### **Modern React Patterns**

- **Functional Components**: All components use modern functional syntax with hooks
- **React.StrictMode**: Enabled for development warnings and future compatibility
- **Modern JSX Transform**: Using `react-jsx` for cleaner JSX without React imports
- **Concurrent Features**: Ready for React's concurrent rendering features

### **Browser Compatibility**

- **ES2020 Target**: Modern JavaScript features with excellent browser support
- **Browser Support**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Support**: iOS 14+, Android 88+
- **No Polyfills Required**: All features have native browser support

### **Performance Optimizations**

- **Automatic Code Splitting**: Vite handles optimal chunk splitting
- **Tree Shaking**: Unused code elimination for smaller bundles
- **Modern Bundling**: ES modules with optimal loading strategies

## 📝 Logging System

The project includes a comprehensive, environment-aware logging system:

### Features

- **Multiple Log Levels**: DEBUG, INFO, WARN, ERROR, NONE
- **Environment-Aware**: Different configurations for development, production, and test
- **Structured Logging**: JSON-formatted logs with context and timestamps
- **Error Handling**: Automatic error object capture and formatting
- **Performance Logging**: Built-in timing utilities
- **Remote Logging**: Optional remote endpoint integration for production monitoring
- **Log Buffering**: In-memory log storage with configurable limits

### Usage

```typescript
import { logger } from '@/utils/logger'

// Basic logging
logger.info('User logged in', { userId: 123 })
logger.warn('API rate limit approaching', { remaining: 5 })
logger.error('Database connection failed', {}, error)

// Performance logging
logger.time('api-call')
// ... API call
logger.timeEnd('api-call')
```

### Configuration

Logging behavior is controlled via environment variables:

```env
VITE_LOG_LEVEL=DEBUG
VITE_ENABLE_CONSOLE_LOGGING=true
VITE_ENABLE_REMOTE_LOGGING=false
VITE_REMOTE_LOGGING_ENDPOINT=https://logs.example.com
```

## 📊 Project Status Reporting

### Built-in Monitoring

- **Error Boundaries**: Catch and handle React errors
- **Performance Monitoring**: Vite bundle analyzer
- **Test Coverage**: Comprehensive test coverage reporting
- **Structured Logging**: Environment-aware logging system with different levels
- **Dead Code Detection**: Automated unused code and dependency detection
- **Bundle Analysis**: Size monitoring and visualization
- **Dependency Health**: Security auditing and circular dependency detection

### Recommended Integrations

- **Sentry**: Error tracking and performance monitoring
- **Google Analytics**: User analytics
- **Lighthouse CI**: Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `npm run commit`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🙏 Inspiration & Sources

This project was inspired by and built using guidance from various excellent resources:

### **Primary Inspiration**

- [Robin Wieruch's Blog](https://www.robinwieruch.de/) - React best practices and modern development patterns
- [The Road to React](https://www.robinwieruch.de/the-road-to-react-book/) - Comprehensive React learning resource

### **Documentation & Guides**

- [React 19.2 Documentation](https://react.dev/reference/react) - Official React documentation
- [Material-UI Documentation](https://mui.com/) - Component library and theming
- [Vite Documentation](https://vitejs.dev/) - Build tool and development server
- [TanStack Query](https://tanstack.com/query/latest) - Server state management
- [Zustand](https://github.com/pmndrs/zustand) - Client state management
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing
- [Storybook](https://storybook.js.org/) - Component development and documentation
- [ESLint](https://eslint.org/) - Code linting and quality
- [Prettier](https://prettier.io/) - Code formatting
- [Vitest](https://vitest.dev/) - Testing framework
- [MSW](https://mswjs.io/) - API mocking

## 📚 Additional Resources

## 📄 License

This project is licensed under the MIT License.
