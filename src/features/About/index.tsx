import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

export function About() {
  return (
    <Box maxWidth="lg" mx="auto">
      <Typography variant="h3" component="h1" gutterBottom>
        About
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        This project follows modern React best practices for development,
        featuring a comprehensive setup with TypeScript, code quality tools, and
        modern development practices.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Tech Stack
      </Typography>

      <List>
        {[
          "React 19.2 with TypeScript",
          "Vite for fast development and building",
          "Material-UI for modern UI components",
          "React Router for routing",
          "Zustand for state management",
          "TanStack Query for server state",
          "Vitest for testing",
          "ESLint & Prettier for code quality",
          "Husky for git hooks",
        ].map((item, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemText
              primary={item}
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Project Structure
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Following modern best practices for organizing React applications:
      </Typography>

      <List>
        {[
          "Feature-based organization - Components grouped by features",
          "Technical folders - Hooks, context, and utilities separated",
          "Component folders - Complex components in dedicated folders",
          "Type safety - Full TypeScript integration",
          "Code quality - Automated linting and formatting",
        ].map((item, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <ListItemText
              primary={item}
              primaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
