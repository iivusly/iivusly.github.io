"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.foreground.primary};
  }

  a {
    color: ${(props) => props.theme.palette.blue.dark}
  }
`;

export default GlobalStyles;
