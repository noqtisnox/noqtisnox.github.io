import { Box, Typography, Container, Button } from "@mui/material";

export const Hero = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 15, textAlign: "center" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontSize: { xs: "3rem", md: "5rem" } }}
        >
          Hi, I'm{" "}
          <Box component="span" color="primary.main">
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block", // Required for the gradient to wrap correctly
              }}
            >
              Nox
            </Typography>
          </Box>
          .
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mb: 4 }}>
          React & TypeScript Developer
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#projects-section" // Link to the ID we just created
          sx={{
            borderRadius: 8,
            px: 4,
            fontWeight: 700,
            background: (theme) =>
              `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            boxShadow: (theme) =>
              `0 4px 14px 0 ${theme.palette.primary.main}66`,
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: (theme) =>
                `0 6px 20px 0 ${theme.palette.primary.main}88`,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
            },
          }}
        >
          View My Work
        </Button>
      </Box>
    </Container>
  );
};
