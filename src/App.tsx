import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { Navbar } from "@components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsMarquee } from "@components/SkillsMarquee";

import { Hero } from "@sections/Hero";
import Interests from "@/sections/Interests";
import Footer from "@/sections/Footer";
import useProjects from "@hooks/useProjects";

export default function App() {
  const { projects, loading } = useProjects("cherrynox");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Stack spacing={12}>
          <Box>
            <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
              My Day-to-Day Tools
            </Typography>

            <SkillsMarquee />
          </Box>
        </Stack>
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Stack spacing={12}>
          <Box>
            <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
              Explore Projects
            </Typography>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress color="secondary" />
              </Box>
            ) : (
              <ProjectGrid projects={projects} />
            )}
          </Box>

          <Box id="interests-section">
            <Interests />
          </Box>
        </Stack>
      </Container>

      <Box id="footer-section">
        <Footer />
      </Box>
    </Box>
  );
}
