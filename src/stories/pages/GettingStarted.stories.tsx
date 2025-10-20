import { Box, Typography, Paper, Stack, Chip } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";

const meta: Meta = {
  title: "Pages/Getting Started",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Welcome to the Modern React Stack Storybook! This comprehensive design system showcases all the Material-UI components and custom components integrated into the project.",
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Box sx={{ p: 3 }}>
          <Story />
        </Box>
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GettingStarted: Story = {
  render: () => (
    <Box>
      <Typography variant="h3" gutterBottom>
        Getting Started with Modern React Stack
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Welcome to the Modern React Stack Storybook! This comprehensive design
        system showcases all the Material-UI components and custom components
        integrated into the project.
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          🚀 What&apos;s Included
        </Typography>
        <Typography variant="body1" paragraph>
          This Storybook includes:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            • <strong>Material-UI Components</strong>: All MUI components with
            various variants and states
          </Typography>
          <Typography variant="body2">
            • <strong>Custom Components</strong>: Project-specific components
            like Header, Footer, and Layout
          </Typography>
          <Typography variant="body2">
            • <strong>Theme System</strong>: Light and dark theme demonstrations
          </Typography>
          <Typography variant="body2">
            • <strong>Interactive Controls</strong>: Play with component
            properties in real-time
          </Typography>
          <Typography variant="body2">
            • <strong>Documentation</strong>: Comprehensive guides and examples
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          📚 Navigation
        </Typography>
        <Typography variant="h5" gutterBottom>
          Component Categories
        </Typography>
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Typography variant="body2">
            • <strong>Material-UI</strong>: Core MUI components (Button, Card,
            Typography, Grid, etc.)
          </Typography>
          <Typography variant="body2">
            • <strong>Components</strong>: Custom application components
            (Header, Footer, Layout)
          </Typography>
          <Typography variant="body2">
            • <strong>Pages</strong>: Full page demonstrations and showcases
          </Typography>
        </Stack>

        <Typography variant="h5" gutterBottom>
          Key Stories
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            • <strong>Component Showcase</strong>: See all components in one
            place
          </Typography>
          <Typography variant="body2">
            • <strong>Theme Demo</strong>: Compare light and dark themes
          </Typography>
          <Typography variant="body2">
            • <strong>Interactive Demo</strong>: Try interactive components
          </Typography>
          <Typography variant="body2">
            • <strong>Getting Started</strong>: This documentation page
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          🎨 Theme System
        </Typography>
        <Typography variant="body1" paragraph>
          The project includes a comprehensive theme system with:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            • <strong>Light Theme</strong>: Clean, modern design with blue
            primary colors
          </Typography>
          <Typography variant="body2">
            • <strong>Dark Theme</strong>: Dark mode with proper contrast ratios
          </Typography>
          <Typography variant="body2">
            • <strong>Custom Components</strong>: Styled buttons, cards, and app
            bars
          </Typography>
          <Typography variant="body2">
            • <strong>Typography</strong>: Roboto font family with consistent
            sizing
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          🛠️ Development
        </Typography>
        <Typography variant="h5" gutterBottom>
          Running Storybook
        </Typography>
        <Box
          component="pre"
          sx={{
            bgcolor: "grey.100",
            p: 2,
            borderRadius: 1,
            fontFamily: "monospace",
            fontSize: "0.875rem",
            mb: 2,
          }}
        >
          npm run storybook
        </Box>

        <Typography variant="h5" gutterBottom>
          Building Storybook
        </Typography>
        <Box
          component="pre"
          sx={{
            bgcolor: "grey.100",
            p: 2,
            borderRadius: 1,
            fontFamily: "monospace",
            fontSize: "0.875rem",
            mb: 2,
          }}
        >
          npm run build-storybook
        </Box>

        <Typography variant="h5" gutterBottom>
          Quality Checks
        </Typography>
        <Box
          component="pre"
          sx={{
            bgcolor: "grey.100",
            p: 2,
            borderRadius: 1,
            fontFamily: "monospace",
            fontSize: "0.875rem",
          }}
        >
          npm run quality:full
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          🎯 Best Practices
        </Typography>
        <Typography variant="h5" gutterBottom>
          Component Development
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            1. <strong>Use Material-UI Components</strong>: Leverage the
            comprehensive MUI library
          </Typography>
          <Typography variant="body2">
            2. <strong>Follow Design System</strong>: Maintain consistency with
            the established theme
          </Typography>
          <Typography variant="body2">
            3. <strong>Test Responsively</strong>: Ensure components work on all
            screen sizes
          </Typography>
          <Typography variant="body2">
            4. <strong>Accessibility First</strong>: Include proper ARIA
            attributes and keyboard support
          </Typography>
          <Typography variant="body2">
            5. <strong>Document Thoroughly</strong>: Add comprehensive stories
            and documentation
          </Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          🚀 Next Steps
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            1. <strong>Explore Components</strong>: Browse through the component
            stories
          </Typography>
          <Typography variant="body2">
            2. <strong>Try Interactive Controls</strong>: Modify properties and
            see changes
          </Typography>
          <Typography variant="body2">
            3. <strong>Check Themes</strong>: Switch between light and dark
            themes
          </Typography>
          <Typography variant="body2">
            4. <strong>Review Documentation</strong>: Read component-specific
            documentation
          </Typography>
          <Typography variant="body2">
            5. <strong>Start Building</strong>: Use the components in your own
            projects
          </Typography>
        </Stack>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Chip
            label="Happy building! 🎉"
            color="primary"
            sx={{ fontSize: "1.1rem", py: 2 }}
          />
        </Box>
      </Paper>
    </Box>
  ),
};
