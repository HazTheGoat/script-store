"use client";

import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { useGlobalStore } from "@/store";

type Props = {
  children: React.ReactNode;
};
export function ThemeRegistryProvider({ children }: Props) {
  const mode = useGlobalStore((state) => state.mode);

  const theme = createAppTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
