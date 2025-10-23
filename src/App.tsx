import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useAppSelector } from "./hooks/useAppSelector";
import useActions from "./hooks/useActions";

import getTheme from "./utils/theme";
import { HeroSection } from "./components/HeroSection";

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
    </MuiThemeProvider>
  );
};

export default App;
