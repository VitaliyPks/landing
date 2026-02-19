import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppSelector } from '@app/store';

import { getTheme } from '@features/theme';

import { TechnologiesSection } from '@widgets/technologies-section';
import { ProjectsSection } from '@widgets/project-section';
import { AboutSection } from '@widgets/about-section';
import { HeroSection } from '@widgets/hero-section';

const App = () => {
  const mode = useAppSelector(state => state.theme.mode);

  const muiTheme = getTheme(mode);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
    </MuiThemeProvider>
  );
};

export default App;
