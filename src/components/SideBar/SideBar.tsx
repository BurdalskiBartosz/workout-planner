import { Logo } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { StyledLogoWrapper, StyledText, StyledWrapper } from "./sideBar.styles";

const SideBar = () => {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>
      <StyledText>Menu</StyledText>
      <Nav />
    </StyledWrapper>
  );
};

export { SideBar };
