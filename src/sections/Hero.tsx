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
                color: "primary.main",
                display: "inline-block",
                verticalAlign: "bottom",
              }}
            >
              {" Nox"}
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
          variant="outlined"
          size="large"
          href="#projects-section"
          sx={{
            borderRadius: 8,
            px: { xs: 3, md: 4 },
            fontWeight: 700,
            borderColor: "primary.main",
            color: "primary.main",
            transition: "0.3s",
            "&:hover": {
              bgcolor: "rgba(122, 143, 166, 0.1)",
              borderColor: "primary.light",
              color: "primary.light",
              transform: "scale(1.05)",
            },
          }}
        >
          View My Work
        </Button>
      </Box>
    </Container>
  );
};