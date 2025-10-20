import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="400px"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Page not found
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Go Home
      </Button>
    </Box>
  );
}
