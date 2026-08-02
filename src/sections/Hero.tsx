import { Box, Typography, Container, Avatar, keyframes } from "@mui/material";

import bannerUrl from "../assets/rem-welcome-banner.gif";

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px 6px rgba(122, 143, 166, 0.4);
  }
  50% {
    box-shadow: 0 0 40px 14px rgba(122, 143, 166, 0.7);
  }
`;

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
            animation: `${pulseGlow} 2s ease-in-out infinite`,
          }}
          variant="rounded"
        />
      </Box>
    </Container>
  );
};
