import { useState } from 'react';
import { Box, Typography, Button, Collapse, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

  return (
    <Box sx={{ bgcolor: 'background.default', borderY: '1px solid', borderColor: 'divider' }}>
      {/* 1. The Dynamic Marquee */}
      <Box sx={{ overflow: 'hidden', py: 8 }}>
        <motion.div
          // Use a larger percentage or dynamic value to ensure all items fit
          animate={{ x: [0, "-50%"] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '60px', alignItems: 'center', width: 'max-content' }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Box
              key={`${skill.slug}-${index}`}
              sx={{
                position: 'relative',
                minWidth: { xs: 120, md: 180 }, 
                height: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover .skill-text': { opacity: 0, transform: 'scale(0.8) translateY(-20px)', filter: 'blur(4px)' },
                '&:hover .skill-icon': { opacity: 1, transform: 'scale(1.3) translateY(0)' },
              }}
            >
              <Typography className="skill-text" variant="h4" sx={{ fontWeight: 900, color: 'text.primary', opacity: 0.15, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'absolute', whiteSpace: 'nowrap' }}>
                {skill.name}
              </Typography>
              <Box className="skill-icon" component="img" src={`https://skillicons.dev/icons?i=${skill.slug}`} alt={skill.name} sx={{ width: 64, height: 64, opacity: 0, transform: 'scale(0.5) translateY(20px)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', position: 'absolute', filter: (theme) => `drop-shadow(0 0 15px ${theme.palette.primary.main}66)` }} />
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* 2. "View All" Toggle Button */}
      <Box sx={{ textAlign: 'center', pb: 4 }}>
        <Button 
          variant="text" 
          color="secondary"
          onClick={() => setShowAll(!showAll)}
          endIcon={showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          sx={{ fontWeight: 700 }}
        >
          {showAll ? "Hide List" : "View Full Stack"}
        </Button>

        {/* 3. The Expandable Grid View */}
        <Collapse in={showAll}>
          <Box sx={{ p: 4, maxWidth: 'md', mx: 'auto' }}>
            <Grid container spacing={2} justifyContent="center">
              {skills.map((skill) => (
                <Grid key={skill.slug}>
                  <Chip 
                    avatar={<Box component="img" src={`https://skillicons.dev/icons?i=${skill.slug}`} sx={{ width: 24, height: 24 }} />}
                    label={skill.name}
                    variant="outlined"
                    sx={{ p: 2, height: 'auto', borderRadius: 2, borderColor: 'divider' }}
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