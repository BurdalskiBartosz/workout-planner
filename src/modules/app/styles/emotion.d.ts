import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      gray: string;
      blue: string;
      red: string;
    };
  }
}
