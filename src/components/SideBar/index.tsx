import { Nav } from "../Nav";
import { StyledText, StyledWrapper } from "./sideBar.styles";

const SideBar = () => {
  return (
    <StyledWrapper>
      <StyledText>Menu</StyledText>
      <Nav />
    </StyledWrapper>
  );
};

export { SideBar };
