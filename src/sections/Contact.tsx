import { Box, Typography, Container, Button, Stack, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => (
  <Box
    component="footer"
    sx={{ 
      py: 12, 
      bgcolor: "background.paper", 
      borderRadius: "60px 60px 0 0",
      borderTop: '1px solid',
      borderColor: 'divider',
      mt: 10
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Typography variant="h2" fontWeight={900} gutterBottom>
        Let's{" "}
        <Box 
          component="span" 
          sx={{ 
            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Connect
        </Box>
      </Typography>
      
      <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
        Currently deepening my knowledge in Smart Systems at NULP. 
        Open for collaborations, tech talk, or worldbuilding brainstorms.
      </Typography>

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        justifyContent="center" 
        alignItems="center"
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<EmailIcon />}
          href="mailto:cheporte.dev@gmail.com"
          sx={{ 
            borderRadius: 8, 
            px: 6, 
            py: 2,
            fontWeight: 700,
            boxShadow: (theme) => `0 10px 20px ${theme.palette.primary.main}33`
          }}
        >
          Email Me
        </Button>

        <Stack direction="row" spacing={2}>
          <Tooltip title="GitHub">
            <IconButton 
              component="a"
              href="https://github.com/noqtisnox"
              target="_blank"
              sx={{ 
                width: 64, 
                height: 64, 
                border: '1px solid', 
                borderColor: 'divider',
                '&:hover': { color: 'secondary.main', borderColor: 'secondary.main' }
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton 
              component="a"
              href="https://linkedin.com/in/yevhenii-bevz"
              target="_blank"
              sx={{ 
                width: 64, 
                height: 64, 
                border: '1px solid', 
                borderColor: 'divider',
                '&:hover': { color: 'secondary.main', borderColor: 'secondary.main' }
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 8 }}>
        © {new Date().getFullYear()} — Built with React, MUI, and a touch of soul magic.
      </Typography>
    </Container>
  </Box>
);