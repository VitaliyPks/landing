import { createTheme } from "@mui/material/styles";
import type { TThemeMode } from "../types/theme";

const getTheme = (mode: TThemeMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" },
            background: { default: "#ffffff", paper: "#f8f9fa" },
            text: { primary: "#1a1a1a" },
          }
        : {
            primary: { main: "#90caf9" },
            background: { default: "#121212", paper: "#1e1e1e" },
            text: { primary: "#f0f0f0" },
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      h1: { fontSize: "2.5rem", fontWeight: 700 },
      h2: { fontSize: "2rem", fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
    },
  });

export default getTheme;
