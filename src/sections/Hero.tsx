import { Box, Typography, Container, Button } from '@mui/material';

export const Hero = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 15, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '3rem', md: '5rem' } }}>
          Hi, I'm <Box component="span" color="primary.main">Nox</Box>.
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mb: 4 }}>
          React & TypeScript Developer
        </Typography>
        <Button variant="contained" size="large" sx={{ borderRadius: 8, px: 4 }}>
          View My Work
        </Button>
      </Box>
    </Container>
  );
};