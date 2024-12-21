import styled from "@emotion/styled";
import { SideBar } from "@/components/SideBar";
import { PropsWithChildren } from "react";

const StyledWraper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`;

const StyledMain = styled.main`
  padding: 60px 40px 40px;
`;

const AppTemplate = ({ children }: PropsWithChildren) => {
  return (
    <StyledWraper>
      <SideBar />
      <StyledMain>{children}</StyledMain>
    </StyledWraper>
  );
};

export { AppTemplate };
