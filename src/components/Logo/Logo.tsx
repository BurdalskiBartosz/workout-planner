import logo from "@/assets/logo.png";
import { StyledLogo, StyledLogoWrapper } from "./logo.styles";

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt="Logo" />
    </StyledLogoWrapper>
  );
};

export { Logo };
