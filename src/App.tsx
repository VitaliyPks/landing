import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useAppSelector } from "./hooks/useAppSelector";
import useActions from "./hooks/useActions";

import getTheme from "./utils/theme";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";

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
    </MuiThemeProvider>
  );
};

export default App;
