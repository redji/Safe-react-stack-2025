import { Box, Typography, Container } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          &copy; 2024 Modern React Stack. Built with best practices.
        </Typography>
      </Container>
    </Box>
  );
}
