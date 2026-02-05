import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";

const navItems = [
  { label: "Projects", href: "#projects-section" },
  { label: "Skills", href: "#skills-section" },
  { label: "Education", href: "#education-section" },
  { label: "Contact", href: "#contact-section" },
];

export const Navbar = () => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      bgcolor: "rgba(15, 23, 42, 0.8)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid",
      borderColor: "divider",
    }}
  >
    <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          fontWeight={900}
          sx={{
            cursor: "pointer",
            background: (theme) =>
              `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          NOQTISNOX
        </Typography>

        <Stack direction="row" spacing={1}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              color="inherit"
              sx={{
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "rgba(168, 85, 247, 0.1)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);
