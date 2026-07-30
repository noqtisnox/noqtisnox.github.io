import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import CastleIcon from "@mui/icons-material/Castle";
import TerminalIcon from "@mui/icons-material/Terminal";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const interests = [
  {
    icon: <LanguageIcon fontSize="large" />,
    title: "Conlangs",
    text: "Building constructed languages — grammar, phonology, and the stories they carry.",
  },
  {
    icon: <CastleIcon fontSize="large" />,
    title: "D&D Worldbuilding",
    text: "Designing Quelmiir: soul magic, factions, and campaign lore from the ground up.",
  },
  {
    icon: <TerminalIcon fontSize="large" />,
    title: "Linux Ricing",
    text: "Tuning Hyprland, Waybar, and terminal setups until every pixel feels intentional.",
  },
  {
    icon: <AutoStoriesIcon fontSize="large" />,
    title: "Creative Writing",
    text: "Original fiction and fanfic — where the worldbuilding actually gets to breathe.",
  },
];

const Interests = () => {
  return (
    <Box component="section" sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Beyond the Code
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {interests.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: "100%",
                p: 2,
                backgroundColor: "background.paper",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) =>
                    `0 8px 24px ${theme.palette.primary.main}33`,
                },
              }}
            >
              <CardContent>
                <Box sx={{ color: "primary.main", mb: 1.5 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;
