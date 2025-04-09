import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
  },
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
  },
});

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme(getDesignTokens(mode));
