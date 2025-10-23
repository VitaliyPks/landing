import { Typography, Button, IconButton, Stack } from "@mui/material";
import {
  DarkMode,
  LightMode,
  Download,
  GitHub,
  Telegram,
  Email,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTypewriter } from "../../hooks/useTypeWriter";
import {
  EMAIL,
  FULL_NAME,
  GITHUB,
  INFO_SHORT,
  PROFESSION,
  TECHNOLOGYS,
  TELEGRAM,
} from "../../data/resume-data";
import {
  BoxMain,
  BoxTag,
  InfoTypography,
  NameTypography,
} from "./HeroSection.styles";

interface IHeroProps {
  onToggleTheme: () => void;
}

export const HeroSection = ({ onToggleTheme }: IHeroProps) => {
  const { mode } = useAppSelector((state) => state.theme);

  const displayedName = useTypewriter(FULL_NAME, 50);

  return (
    <BoxMain
      sx={{
        px: { xs: 2, md: 4 },
      }}
    >
      <IconButton
        onClick={onToggleTheme}
        color="inherit"
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
        sx={{ position: "absolute", top: 24, right: 24 }}
      >
        {mode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NameTypography
          variant="h1"
          sx={{ fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" }, mb: 1 }}
        >
          {displayedName}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ color: mode === "dark" ? "#90caf9" : "#1976d2" }}
          >
            |
          </motion.span>
        </NameTypography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.8rem" },
            fontWeight: 500,
            mb: 3,
            color: "text.secondary",
          }}
        >
          {PROFESSION}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1}
          mb={4}
        >
          {TECHNOLOGYS.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + index * 0.05, duration: 0.3 }}
            >
              <BoxTag sx={{ px: 1.5, py: 0.5 }}>{tag}</BoxTag>
            </motion.div>
          ))}
        </Stack>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          justifyContent="center"
          mb={3}
        >
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            component="a"
            href={GITHUB}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<Telegram />}
            component="a"
            href={`https://t.me/${TELEGRAM.replace("@", "")}`}
            target="_blank"
            rel="noopener"
          >
            Telegram
          </Button>
          <Button
            variant="outlined"
            startIcon={<Email />}
            component="a"
            href={`mailto:${EMAIL}`}
          >
            Email
          </Button>
          <Button
            variant="contained"
            startIcon={<Download />}
            component="a"
            href="/resume.pdf"
            download
            sx={{
              bgcolor: mode === "dark" ? "#90caf9" : "#1976d2",
              "&:hover": {
                bgcolor: mode === "dark" ? "#64b5f6" : "#1565c0",
              },
            }}
          >
            Скачать резюме
          </Button>
        </Stack>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <InfoTypography variant="body2" sx={{ mt: 4 }}>
          {INFO_SHORT}
        </InfoTypography>
      </motion.div>
    </BoxMain>
  );
};
