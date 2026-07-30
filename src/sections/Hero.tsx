import { Box, Typography, Container, Button, Avatar } from "@mui/material";

import bannerUrl from "../assets/rem-welcome-banner.gif";

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
                marginLeft: 3,
                fontSize: "inherit",
                fontWeight: 900,
                color: "primary.main",
                display: "inline-block",
                verticalAlign: "bottom",
              }}
            >
              {"Nox"}
            </Typography>
            .
          </Box>
        </Typography>

        <Avatar
          src={bannerUrl}
          alt="Rem"
          sx={{
            width: 150,
            height: 150,
            margin: "0 auto",
          }}
          variant="rounded"
        />

        <Button
          variant="outlined"
          size="large"
          href="#skills-section"
          sx={{
            borderRadius: 8,
            px: { xs: 3, md: 4 },
            marginTop: 5,
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
          Let's Get Started
        </Button>
      </Box>
    </Container>
  );
};
