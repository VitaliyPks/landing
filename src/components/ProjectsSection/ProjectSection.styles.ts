import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BoxMain = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  maxWidth: 1200,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 4),
  },
}));

export const ProjectMainTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  fontSize: "2rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ProjectCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(6),
  borderRadius: theme.shape.borderRadius || 8,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(0, 0, 0, 0.02)",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.08)"
  }`,
}));

export const ProjectHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

export const ProjectMeta = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
}));

export const StackTags = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

export const StackTag = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(0.8)} ${theme.spacing(1)}`,
  borderRadius: 4,
  fontSize: "0.85rem",
  fontWeight: 500,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(144, 202, 249, 0.15)"
      : "rgba(25, 118, 210, 0.1)",
  color: theme.palette.mode === "dark" ? "#90caf9" : "#1976d2",
}));

export const ProjectSubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const List = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
  lineHeight: 1.6,
  "& li": {
    marginBottom: theme.spacing(1),
  },
}));

export const TeamInfo = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
  fontStyle: "italic",
}));
