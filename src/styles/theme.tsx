import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";

const theme = {
  colors: {
    gray: "#838383",
    blue: "#3629b7",
  },
};

const Theme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export { Theme, theme };
