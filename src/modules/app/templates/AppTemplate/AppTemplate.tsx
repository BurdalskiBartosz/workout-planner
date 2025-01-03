import { SideBar } from "@/modules/shared/ui/SideBar";
import { StyledMain, StyledWraper } from "./AppTemplate.styles";
import { Outlet } from "react-router";

const AppTemplate = () => {
  return (
    <StyledWraper>
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledWraper>
  );
};

export { AppTemplate };
