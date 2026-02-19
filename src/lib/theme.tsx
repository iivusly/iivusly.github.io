"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/globalStyles";

const theme = {
  background: {
    primary: "#282828",
    hard: "#1d2021",
    soft: "#32302f",
    mutter: "#3c3836",
    selection: "#504945",
    highlight: "#665c54",
    faint: "#7c6f64",
  },
  foreground: {
    primary: "#fbf1c7",
    highContrast: "#ebdbb2",
    medium: "#d5c4a1",
    low: "#bdae93",
    faded: "#a89984",
  },
  palette: {
    red: { dark: "#cc241d", light: "#fb4934" },
    green: { dark: "#98971a", light: "#b8bb26" },
    yellow: { dark: "#d79921", light: "#fabd2f" },
    blue: { dark: "#458588", light: "#83a598" },
    purple: { dark: "#b16286", light: "#d3869b" },
    aqua: { dark: "#689d6a", light: "#8ec07c" },
    orange: { dark: "#d65d0e", light: "#f38019" },
    gray: { dark: "#928374", light: "#a89984" },
  },
};

export default function ThemeClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
