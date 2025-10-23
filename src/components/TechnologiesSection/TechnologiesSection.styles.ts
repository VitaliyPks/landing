import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import { getLevelColor } from "./TechnologiesSection.const";

export const BoxMain = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  maxWidth: 1200,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 4),
  },
}));

export const TechTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  fontSize: "2rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
}));

export const TechList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
}));

export const TechItemBox = styled(Box)<{
  level: "Advanced" | "Intermediate" | "Basic";
}>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5),
  borderRadius: (theme.shape.borderRadius as number) || 4,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(0, 0, 0, 0.02)",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.04)",
  },
}));

export const TechName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const TechExperience = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

export const LevelLabel = styled(Typography)<{
  level: "Advanced" | "Intermediate" | "Basic";
}>(({ theme, level }) => ({
  fontWeight: 600,
  color: getLevelColor(level, theme.palette.mode),
  fontSize: "0.9rem",
  textAlign: "left",
  paddingBottom: theme.spacing(1),
}));

export const ProgressBarBox = styled(Box)(({ theme }) => ({
  width: 95,
  height: 6,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)",
  borderRadius: 3,
  mt: 0.5,
  overflow: "hidden",
}));

export const ProgressBarFill = styled(Box)<{
  level: "Advanced" | "Intermediate" | "Basic";
}>(({ theme, level }) => ({
  height: "100%",
  width:
    level === "Advanced" ? "100%" : level === "Intermediate" ? "65%" : "30%",
  backgroundColor: getLevelColor(level, theme.palette.mode),
  borderRadius: 3,
}));
