import { styled } from "@mui/material/styles";
import { Box, Typography, Card } from "@mui/material";

export const BoxMain = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  maxWidth: 1200,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 4),
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  fontSize: "2rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  lineHeight: 1.7,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(8),
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
  },
}));

export const QualitiesGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const QualityCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.04)"
      : "rgba(0, 0, 0, 0.02)",
  borderRadius: (theme.shape.borderRadius as number) * 2,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[4],
  },
}));

export const QualityTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  color: theme.palette.primary.main,
}));

export const QualityDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
}));
