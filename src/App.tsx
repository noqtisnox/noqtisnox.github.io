import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { Navbar } from "@components/Navbar";
import { ProjectCarousel } from "@components/ProjectCarousel";
import { SkillsMarquee } from "@components/SkillsMarquee";

import { Hero } from "@sections/Hero";
import { Education } from "@sections/Education";
import { Contact } from "@sections/Contact";
import useProjects from "@hooks/useProjects";

export default function App() {
  const { projects, loading } = useProjects("noqtisnox");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />

      <Box id="skills-section">
        <SkillsMarquee />
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Stack spacing={12}>
          <Box>
            <Typography
              id="projects-section"
              variant="h3"
              fontWeight={900}
              gutterBottom
            >
              Explore{" "}
              <Box component="span" color="primary.main">
                Works
              </Box>
            </Typography>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <ProjectCarousel projects={projects} />
            )}
          </Box>

          <Box id="education-section">
            <Education />
          </Box>
        </Stack>
      </Container>

      <Box id="contact-section">
        <Contact />
      </Box>
    </Box>
  );
}
