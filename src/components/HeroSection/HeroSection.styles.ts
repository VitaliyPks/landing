import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BoxMain = styled(Box)(({ theme }) => ({
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: theme.palette.background.default,
  position: "relative",
}));

export const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, #90caf9, #bb86fc)"
      : "linear-gradient(90deg, #1976d2, #6a1b9a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const BoxTag = styled(Box)(({ theme }) => ({
  borderRadius: "6px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(144, 202, 249, 0.1)"
      : "rgba(25, 118, 210, 0.08)",
  color: theme.palette.mode === "dark" ? "#90caf9" : "#1976d2",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(144, 202, 249, 0.3)"
      : "rgba(25, 118, 210, 0.3)"
  }`,
  fontSize: "0.875rem",
  fontWeight: 500,
}));

export const InfoTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  maxWidth: 600,
}));
