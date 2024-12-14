import { JSX } from "react";
import { StyledNavLink } from "./navLink.styles";

type NavLinkProps = {
  to: string;
  label: string;
  icon: JSX.Element;
};

const NavLink = ({ to, label, icon }: NavLinkProps) => {
  return (
    <StyledNavLink to={to}>
      {icon}
      {label}
    </StyledNavLink>
  );
};

export { NavLink };
