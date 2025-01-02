import { Logo } from "@/modules/shared/ui/Logo";
import { Nav } from "@/modules/shared/ui/Nav";
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
