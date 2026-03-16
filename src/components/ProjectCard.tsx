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
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export const ProjectCard = ({ repo }: { repo: GitHubRepo }) => {
  const langColor = repo.language
    ? (LANGUAGE_COLORS[repo.language] ?? "#7a8fa6")
    : null;

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
        borderColor: "rgba(255, 255, 255, 0.08)",
        bgcolor: "rgba(46, 50, 56, 0.6)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        "&:hover": {
          borderColor: langColor ?? "primary.main",
          transform: "translateY(-6px)",
          boxShadow: `0 16px 40px rgba(0,0,0,0.35)`,
        },
      }}
    >
      {/* ── Top ── */}
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography
            variant="h6"
            fontWeight={800}
            fontSize="1rem"
            sx={{
              textTransform: "capitalize",
              lineHeight: 1.3,
              pr: 1,
              color: "text.primary",
            }}
          >
            {repo.name.replace(/-/g, " ")}
          </Typography>
          <Tooltip title="View on GitHub">
            <GitHubIcon fontSize="small" sx={{ color: "text.disabled", flexShrink: 0, mt: 0.2 }} />
          </Tooltip>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.6,
            minHeight: "4.8em", // keeps cards same height when description is short
          }}
        >
          {repo.description || "No description provided."}
        </Typography>
      </Box>

      {/* ── Bottom ── */}
      <Box>
        {/* Topics row */}
        {repo.topics?.length > 0 && (
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap mb={2}>
            {repo.topics.slice(0, 3).map((topic) => (
              <Chip
                key={topic}
                label={topic}
                size="small"
                sx={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  height: 22,
                  borderRadius: "6px",
                  bgcolor: "rgba(122, 143, 166, 0.1)",
                  color: "text.secondary",
                  border: "1px solid rgba(122,143,166,0.18)",
                }}
              />
            ))}
          </Stack>
        )}

        {/* Meta row: language dot + stars + updated */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1.5}>
            {repo.language && langColor && (
              <Stack direction="row" alignItems="center" spacing={0.6}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: langColor,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="caption" color="text.secondary" fontWeight={600}>
                  {repo.language}
                </Typography>
              </Stack>
            )}

            {repo.stargazers_count > 0 && (
              <Stack direction="row" alignItems="center" spacing={0.4}>
                <StarOutlineIcon sx={{ fontSize: "0.85rem", color: "text.disabled" }} />
                <Typography variant="caption" color="text.disabled" fontWeight={600}>
                  {repo.stargazers_count}
                </Typography>
              </Stack>
            )}
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5} color="primary.main">
            <Typography variant="caption" fontWeight={700} color="text.disabled">
              {repo.updated_at ? timeAgo(repo.updated_at) : ""}
            </Typography>
            <OpenInNewIcon sx={{ fontSize: "0.8rem", color: "primary.main" }} />
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
};