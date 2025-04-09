import { IconButton } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useGlobalStore } from "@/store/use-store";

export const ThemeSwitcher = () => {
  const mode = useGlobalStore((state) => state.mode);
  const toggleMode = useGlobalStore((state) => state.toggleMode);

  return (
    <IconButton
      onClick={toggleMode}
      LinkComponent={"a"}
      aria-label="theme switcher"
      color="inherit"
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
