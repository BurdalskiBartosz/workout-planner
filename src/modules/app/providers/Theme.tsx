import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { theme } from "../styles/theme";

const Theme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
