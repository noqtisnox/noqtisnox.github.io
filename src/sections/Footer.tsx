import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 4,
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontStyle: "italic", opacity: 0.8, mb: 1 }}
      >
        "... then let us start from here, from zero."
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.6, display: "block" }}>
        Rem © Tappei Nagatsuki / Re:Zero. Used here purely out of love for the
        character — no ownership claimed.
      </Typography>
    </Box>
  );
};

export default Footer;
