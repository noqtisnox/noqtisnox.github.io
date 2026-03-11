import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7a8fa6",
      light: "#9aafc4",
      dark: "#566a7d",
    },
    secondary: {
      main: "#888888",
      light: "#aaaaaa",
      dark: "#555555",
    },
    background: {
      default: "#2a2a2a",
      paper: "#333333",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#888888",
    },
    divider: "#444444",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 20px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export const brandGradient = "linear-gradient(135deg, #7a8fa6 0%, #888888 100%)";