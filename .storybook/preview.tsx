import React from "react";
import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { theme } from "../src/styles/theme";
import { css, Global, ThemeProvider } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        background-color: white;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
