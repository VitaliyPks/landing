import { createSlice } from "@reduxjs/toolkit";
import type { TThemeMode } from "../../types/theme";

const getInitialTheme = (): TThemeMode => {
  const saved = localStorage.getItem("theme");

  if (saved === "light" || saved === "dark") return saved;

  return "dark";
};

const initialState: { mode: TThemeMode } = {
  mode: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action: { payload: TThemeMode }) => {
      state.mode = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
