import {
  Typography,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import { eduData } from "@data/education";

export const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        fontWeight={900}
        gutterBottom
        sx={{
          mb: 6,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Education
      </Typography>

      <Timeline position={isMobile ? "right" : "alternate"}>
        {eduData.map((item, i) => (
          <TimelineItem key={i}>
            {!isMobile && (
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
                fontWeight={700}
              >
                {item.period}
              </TimelineOppositeContent>
            )}

            <TimelineSeparator>
              <TimelineConnector
                sx={{ bgcolor: i === 0 ? "primary.main" : "secondary.main" }}
              />
              <TimelineDot color={item.color} variant="outlined" sx={{ p: 1 }}>
                <SchoolIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "rgba(30, 41, 59, 0.5)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid",
                  borderColor: "divider",
                  textAlign: "left",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: `${item.color}.main`,
                    transform: "scale(1.02)",
                  },
                }}
              >
                {isMobile && (
                  <Typography
                    variant="caption"
                    color="secondary.main"
                    fontWeight={800}
                  >
                    {item.period}
                  </Typography>
                )}

                <Typography variant="h6" fontWeight={800} display="block">
                  {item.school}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                  fontWeight={600}
                >
                  {item.degree}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                  {item.details}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};
