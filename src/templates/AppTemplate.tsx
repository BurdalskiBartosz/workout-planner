import { SideBar } from "@/components/SideBar";
import { PropsWithChildren } from "react";
import { StyledMain, StyledWraper } from "./AppTemplate.styles";

const AppTemplate = ({ children }: PropsWithChildren) => {
  return (
    <StyledWraper>
      <SideBar />
      <StyledMain>{children}</StyledMain>
    </StyledWraper>
  );
};

export { AppTemplate };
