import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();

  return (
    <main style={{ backgroundColor: theme.palette.primary.main }}>
      <h1>Portfolio in Progress</h1>
      <p>Building something cool with React + TS</p>
    </main>
  )
}

export default App