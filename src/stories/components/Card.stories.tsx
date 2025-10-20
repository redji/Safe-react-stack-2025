import { MoreVert, Favorite, Share, Bookmark } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardHeader,
  Typography,
  Button,
  Avatar,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Card> = {
  title: "Material-UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Material-UI Card component for displaying content in a contained format.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card with basic content. It demonstrates the default
          card styling and layout.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card with Actions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card includes action buttons at the bottom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "primary.main" }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="bookmark">
          <Bookmark />
        </IconButton>
      </CardActions>
    </Card>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=200&fit=crop"
        alt="Green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

export const ComplexCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        alt="Mountain landscape"
      />
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Typography variant="h6" component="h2">
            Mountain Adventure
          </Typography>
          <Chip label="Featured" color="primary" size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          Experience the breathtaking beauty of mountain landscapes. Perfect for
          hiking, photography, and outdoor adventures.
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap">
          <Chip label="Hiking" size="small" variant="outlined" />
          <Chip label="Nature" size="small" variant="outlined" />
          <Chip label="Adventure" size="small" variant="outlined" />
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Box>
          <Typography variant="h6" color="primary">
            $299
          </Typography>
          <Typography variant="caption" color="text.secondary">
            per person
          </Typography>
        </Box>
        <Button variant="contained" size="small">
          Book Now
        </Button>
      </CardActions>
    </Card>
  ),
};

export const ElevationVariants: Story = {
  render: () => (
    <Box display="flex" gap={3} flexWrap="wrap">
      {[0, 1, 2, 4, 8, 16, 24].map((elevation) => (
        <Card key={elevation} elevation={elevation} sx={{ width: 200, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Elevation {elevation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card has elevation level {elevation}.
          </Typography>
        </Card>
      ))}
    </Box>
  ),
};
