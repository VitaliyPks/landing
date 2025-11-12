import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const BoxMain = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 3),
  maxWidth: 1200,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 4),
  },
}));

export const TechTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(5),
  fontSize: "2.2rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  justifyContent: "center",
  marginBottom: theme.spacing(8),
}));

export const FilterButton = styled(Button)<{ active?: boolean }>(
  ({ theme, active }) => ({
    textTransform: "none",
    fontSize: "1.1rem",
    fontWeight: active ? 600 : 500,
    backgroundColor: active
      ? theme.palette.mode === "dark"
        ? "rgba(144, 202, 249, 0.2)"
        : "rgba(25, 118, 210, 0.1)"
      : "transparent",
    color: active
      ? theme.palette.mode === "dark"
        ? "#90caf9"
        : "#1976d2"
      : theme.palette.text.secondary,
    border: `1px solid ${
      active
        ? theme.palette.mode === "dark"
          ? "rgba(144, 202, 249, 0.4)"
          : "rgba(25, 118, 210, 0.4)"
        : theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"
    }`,
    borderRadius: 20,
    padding: theme.spacing(0.75, 2),
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.03)",
    },
  })
);

export const TagsGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  justifyContent: "center",
}));

export const TechTag = styled(Box)<{ active: boolean }>(
  ({ theme, active }) => ({
    borderRadius: 8,
    fontSize: "1.2rem",
    fontWeight: 500,
    opacity: active ? 1 : 0.4,
    transform: active ? "scale(1)" : "scale(0.95)",
    transition: "opacity 0.3s ease, transform 0.2s ease",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(144, 202, 249, 0.1)"
        : "rgba(25, 118, 210, 0.08)",
    color: theme.palette.mode === "dark" ? "#90caf9" : "#1976d2",
    border: `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.08)"
    }`,
  })
);
