import { ProjectCarousel } from '@components/ProjectCarousel';
import useProjects from '@hooks/useProjects';
import { Container, Typography, CircularProgress } from '@mui/material';

import { Hero } from "@sections/Hero";

export default function App() {
  const { projects, loading } = useProjects('noqtisnox');

  return (
    <Container sx={{ py: 8 }}>
      <Hero />

      <Typography variant="h3" fontWeight={800} gutterBottom>
        Explore Works
      </Typography>
      
      {loading ? (
        <CircularProgress />
      ) : (
        <ProjectCarousel projects={projects} />
      )}
    </Container>
  );
}