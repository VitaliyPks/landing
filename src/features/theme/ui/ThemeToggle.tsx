import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '@app/store';

import { toggleTheme } from '@features/theme/model/themeSlice';

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <IconButton
      onClick={handleToggleTheme}
      color="inherit"
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
      sx={{ position: 'absolute', top: 24, right: 24 }}
    >
      {mode === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};
