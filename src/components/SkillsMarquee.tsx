import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const skills = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "ts" },
  { name: "JavaScript", slug: "js" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Sass", slug: "sass" },
  { name: "TailwindCSS", slug: "tailwind" },
  { name: "Express", slug: "express" },
  { name: "PostgreSQL", slug: "postgres" },
  { name: "Python", slug: "py" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Java", slug: "java" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "C++", slug: "cpp" },
  { name: "Vite", slug: "vite" },
  { name: "Firebase", slug: "firebase" },
];

export const SkillsMarquee = () => {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        borderY: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", py: { xs: 4, md: 8 } }}>
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            gap: isMobile ? "80px" : "120px",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Box
              key={`${skill.slug}-${index}`}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 80,
                px: 2,
                cursor: "pointer",
                // THE HOVER EFFECT: Still here for desktop users!
                "&:hover .skill-text": {
                  opacity: 0,
                  transform: "scale(0.8) translateY(-15px)",
                  filter: "blur(4px)",
                },
                "&:hover .skill-icon": {
                  opacity: 1,
                  transform: "scale(1.2) translateY(0)",
                },
              }}
            >
              <Typography
                className="skill-text"
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  fontWeight: 900,
                  color: "text.primary",
                  opacity: 0.1,
                  transition: "all 0.4s ease-out",
                  whiteSpace: "nowrap",
                }}
              >
                {skill.name}
              </Typography>

              <Box
                className="skill-icon"
                component="img"
                src={`https://skillicons.dev/icons?i=${skill.slug}`}
                alt={skill.name}
                sx={{
                  width: { xs: 48, md: 64 },
                  height: { xs: 48, md: 64 },
                  opacity: 0, // Hidden until hover
                  transform: "scale(0.5) translateY(15px)",
                  transition:
                    "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "absolute",
                  filter: (theme) =>
                    `drop-shadow(0 0 10px ${theme.palette.primary.main}44)`,
                }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* CLICK OPTION: For the full grid view */}
      <Box sx={{ textAlign: "center", pb: 4 }}>
        <Button
          variant="text"
          color="secondary"
          onClick={() => setShowAll(!showAll)}
          endIcon={
            showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
          sx={{ fontWeight: 700, textTransform: "none" }}
        >
          {showAll ? "Hide List" : "View Full Stack"}
        </Button>

        <Collapse in={showAll}>
          <Box sx={{ p: 4, maxWidth: "md", mx: "auto" }}>
            <Grid container spacing={1.5} justifyContent="center">
              {skills.map((skill) => (
                <Grid key={skill.slug}>
                  <Chip
                    avatar={
                      <Box
                        component="img"
                        src={`https://skillicons.dev/icons?i=${skill.slug}`}
                        sx={{ width: 20, height: 20 }}
                      />
                    }
                    label={skill.name}
                    variant="outlined"
                    sx={{
                      px: 1,
                      py: 2.5,
                      borderRadius: "12px",
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(168, 85, 247, 0.05)",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
