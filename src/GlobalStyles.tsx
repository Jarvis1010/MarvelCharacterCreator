import { reset } from "@bedrock-layout/css-reset";
import { createGlobalStyle } from "styled-components";
import "focus-visible";

export const GlobalStyles = createGlobalStyle`
${reset}
:root{
  --border-radius-rounded-lg: 0.5rem;
}
  body{
    font-family:sans-serif;
  }
`;
