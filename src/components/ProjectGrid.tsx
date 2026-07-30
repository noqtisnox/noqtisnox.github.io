import { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Chip,
  Stack,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@components/ProjectCard";
import { type GitHubRepo } from "@data/projects";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MotionBox = motion.create(Box);

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Rust: "#dea584",
  Go: "#00ADD8",
};

interface ProjectGridProps {
  projects: GitHubRepo[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [activeLang, setActiveLang] = useState<string | null>(null);
  const [activeTopics, setActiveTopics] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const languages = useMemo(() => {
    const langs = projects
      .map((p) => p.language)
      .filter(Boolean)
      .filter((v, i, a) => a.indexOf(v) === i);
    return langs as string[];
  }, [projects]);

  const allTopics = useMemo(() => {
    const topics = projects.flatMap((p) => p.topics ?? []);
    const counts: Record<string, number> = {};
    topics.forEach((t) => (counts[t] = (counts[t] ?? 0) + 1));
    return Object.entries(counts)
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([topic]) => topic);
  }, [projects]);

  const toggleTopic = (topic: string) => {
    setActiveTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const clearFilters = () => {
    setActiveLang(null);
    setActiveTopics([]);
  };

  const isFiltered = activeLang !== null || activeTopics.length > 0;

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const langOk = !activeLang || p.language === activeLang;
      const topicsOk =
        activeTopics.length === 0 ||
        activeTopics.every((t) => p.topics?.includes(t));
      return langOk && topicsOk;
    });
  }, [projects, activeLang, activeTopics]);

  const visible = showAll || isFiltered ? filtered : filtered.slice(0, 6);
  const hasMore = !isFiltered && filtered.length > 6;

  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          p: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(46, 50, 56, 0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        {languages.length > 0 && (
          <Box sx={{ mb: allTopics.length > 0 ? 2 : 0 }}>
            <Typography
              variant="caption"
              color="text.disabled"
              fontWeight={700}
              sx={{
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              Language
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {languages.map((lang) => {
                const color = LANGUAGE_COLORS[lang] ?? "#7a8fa6";
                const active = activeLang === lang;
                return (
                  <Chip
                    key={lang}
                    label={lang}
                    size="small"
                    onClick={() => setActiveLang(active ? null : lang)}
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: active ? color : "transparent",
                      bgcolor: active ? `${color}22` : "rgba(255,255,255,0.05)",
                      color: active ? color : "text.secondary",
                      transition: "all 0.2s",
                      "&::before": {
                        content: '""',
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: color,
                        mr: 0.5,
                      },
                      "&:hover": {
                        borderColor: color,
                        bgcolor: `${color}18`,
                        color: color,
                      },
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        )}

        {allTopics.length > 0 && (
          <Box>
            <Typography
              variant="caption"
              color="text.disabled"
              fontWeight={700}
              sx={{
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              Topics
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {allTopics.map((topic) => {
                const active = activeTopics.includes(topic);
                return (
                  <Chip
                    key={topic}
                    label={topic}
                    size="small"
                    variant={active ? "filled" : "outlined"}
                    onClick={() => toggleTopic(topic)}
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      borderRadius: "8px",
                      transition: "all 0.2s",
                      ...(active
                        ? {
                            bgcolor: "primary.main",
                            color: "#1a2332",
                            borderColor: "primary.main",
                          }
                        : {
                            borderColor: "divider",
                            color: "text.secondary",
                            "&:hover": {
                              borderColor: "primary.main",
                              color: "primary.main",
                            },
                          }),
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        )}

        <Collapse in={isFiltered}>
          <Box
            sx={{
              mt: 2,
              pt: 2,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="body2" color="text.secondary">
                <Box component="span" fontWeight={700} color="primary.main">
                  {filtered.length}
                </Box>{" "}
                {filtered.length === 1 ? "repo" : "repos"} match
              </Typography>
              <Button
                size="small"
                variant="text"
                color="secondary"
                onClick={clearFilters}
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                  p: 0,
                  minWidth: 0,
                }}
              >
                Clear filters ×
              </Button>
            </Stack>
          </Box>
        </Collapse>
      </Box>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <MotionBox
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            sx={{
              py: 10,
              textAlign: "center",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 4,
            }}
          >
            <Typography color="text.disabled" fontWeight={600}>
              No repos match those filters.
            </Typography>
          </MotionBox>
        ) : (
          <Grid container spacing={3}>
            <AnimatePresence mode="popLayout">
              {visible.map((repo, i) => (
                <Grid
                  key={repo.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                  component={motion.div}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  sx={{ display: "flex" }}
                >
                  <ProjectCard repo={repo} />
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        )}
      </AnimatePresence>

      {hasMore && !showAll && (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => setShowAll(true)}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              borderRadius: 8,
              px: 5,
              fontWeight: 700,
              textTransform: "none",
              borderColor: "divider",
              color: "text.secondary",
              "&:hover": {
                borderColor: "primary.main",
                color: "primary.main",
                bgcolor: "rgba(122, 143, 166, 0.06)",
              },
            }}
          >
            Show {filtered.length - 6} more
          </Button>
        </Box>
      )}
    </Box>
  );
};
