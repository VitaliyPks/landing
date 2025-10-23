import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { TechnologiesSection } from "./components/TechnologiesSection/TechnologiesSection";
import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";

import { useAppSelector } from "./hooks/useAppSelector";
import useActions from "./hooks/useActions";

import getTheme from "./utils/theme";

const App = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const { toggleTheme } = useActions();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const muiTheme = getTheme(mode);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <HeroSection onToggleTheme={handleToggleTheme} />
      <AboutSection />
      <TechnologiesSection />
    </MuiThemeProvider>
  );
};

export default App;
