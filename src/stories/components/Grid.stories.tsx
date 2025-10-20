import { Grid, Paper, Box, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Grid> = {
  title: "Material-UI/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Material-UI Grid v2 component for responsive layouts.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ width: 400 }}>
      <Grid size={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>Item 1</Paper>
      </Grid>
      <Grid size={6}>
        <Paper sx={{ p: 2, textAlign: "center" }}>Item 2</Paper>
      </Grid>
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ width: 600 }}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "primary.light",
            color: "primary.contrastText",
          }}
        >
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "secondary.light",
            color: "secondary.contrastText",
          }}
        >
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            bgcolor: "success.light",
            color: "success.contrastText",
          }}
        >
          xs=12, sm=6, md=4
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const AutoSizing: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ width: 500 }}>
      <Grid size="auto">
        <Paper sx={{ p: 2, textAlign: "center", bgcolor: "info.light" }}>
          Auto
        </Paper>
      </Grid>
      <Grid size={6}>
        <Paper sx={{ p: 2, textAlign: "center", bgcolor: "warning.light" }}>
          Fixed 6
        </Paper>
      </Grid>
      <Grid size="auto">
        <Paper sx={{ p: 2, textAlign: "center", bgcolor: "error.light" }}>
          Auto
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ width: 600 }}>
      <Grid size={8}>
        <Paper sx={{ p: 2, bgcolor: "grey.100" }}>
          <Typography variant="h6" gutterBottom>
            Main Content
          </Typography>
          <Grid container spacing={1}>
            <Grid size={6}>
              <Box sx={{ p: 1, bgcolor: "primary.light", textAlign: "center" }}>
                Nested 1
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{ p: 1, bgcolor: "secondary.light", textAlign: "center" }}
              >
                Nested 2
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper sx={{ p: 2, bgcolor: "grey.200" }}>
          <Typography variant="h6" gutterBottom>
            Sidebar
          </Typography>
          <Typography variant="body2">
            This is a sidebar with some content.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Spacing 1
      </Typography>
      <Grid container spacing={1} sx={{ width: 400, mb: 3 }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} size={3}>
            <Paper sx={{ p: 2, textAlign: "center" }}>Item {item}</Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>
        Spacing 3
      </Typography>
      <Grid container spacing={3} sx={{ width: 400, mb: 3 }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} size={3}>
            <Paper sx={{ p: 2, textAlign: "center" }}>Item {item}</Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom>
        Spacing 5
      </Typography>
      <Grid container spacing={5} sx={{ width: 400 }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} size={3}>
            <Paper sx={{ p: 2, textAlign: "center" }}>Item {item}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

export const CardLayout: Story = {
  render: () => (
    <Grid container spacing={3} sx={{ width: 800 }}>
      {[
        {
          title: "Card 1",
          content: "This is the first card with some content.",
        },
        {
          title: "Card 2",
          content: "This is the second card with different content.",
        },
        {
          title: "Card 3",
          content: "This is the third card with more content here.",
        },
        {
          title: "Card 4",
          content: "This is the fourth card with additional content.",
        },
      ].map((card, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                elevation: 4,
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1 }}
            >
              {card.content}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  ),
};
