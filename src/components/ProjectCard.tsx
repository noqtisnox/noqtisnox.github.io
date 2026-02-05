import {
  Paper,
  Typography,
  Box,
  Chip,
  Stack,
  Link,
  Tooltip,
} from "@mui/material";
import { type GitHubRepo } from "@data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  return (
    <Paper
      elevation={0}
      component={Link}
      href={repo.html_url}
      target="_blank"
      underline="none"
      sx={{
        p: 3,
        height: "100%",
        width: "100%",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.1)",
        bgcolor: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-8px)",
        },
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={1}
        >
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ textTransform: "capitalize" }}
          >
            {repo.name.replace(/-/g, " ")}
          </Typography>
          <Tooltip title="View on GitHub">
            <GitHubIcon
              className="project-icon"
              fontSize="small"
              sx={{ transition: "0.2s", color: "text.secondary" }}
            />
          </Tooltip>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {repo.description || "No description provided."}
        </Typography>
      </Box>

      <Box>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={2}>
          {repo.language && (
            <Chip
              label={repo.language}
              size="small"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
          )}
          {repo.topics.slice(0, 3).map((topic) => (
            <Chip key={topic} label={topic} size="small" variant="outlined" />
          ))}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          color="primary.main"
        >
          <Typography
            variant="button"
            sx={{ fontWeight: 700, fontSize: "0.75rem" }}
          >
            Explore Project
          </Typography>
          <OpenInNewIcon sx={{ fontSize: "1rem" }} />
        </Stack>
      </Box>
    </Paper>
  );
};
