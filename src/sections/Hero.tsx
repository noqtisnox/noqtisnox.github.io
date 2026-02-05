import { Box, Typography, Container, Button } from "@mui/material";

export const Hero = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 10, md: 15 }, textAlign: "center" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "3.5rem", md: "5rem" },
            lineHeight: 1.2,
          }}
        >
          Hi, I'm
          <Box component="span" sx={{ whiteSpace: "nowrap" }}>
            <Typography
              variant="h1"
              component="span"
              sx={{
                fontSize: "inherit",
                fontWeight: 900,
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                verticalAlign: "bottom",
              }}
            >
              Nox
            </Typography>
            .
          </Box>
        </Typography>

        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            mb: 4,
            fontSize: { xs: "1.5rem", md: "2.125rem" },
          }}
        >
          React & TypeScript Developer
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="#projects-section"
          sx={{
            borderRadius: 8,
            px: { xs: 3, md: 4 },
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
