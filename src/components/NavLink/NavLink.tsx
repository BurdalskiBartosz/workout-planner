import { Icon, type IconName } from "@/components/Icon";
import { StyledNavLink } from "./navLink.styles";

type NavLinkProps = {
  to: string;
  label: string;
  icon?: IconName;
};

const NavLink = ({ to, label, icon }: NavLinkProps) => {
  return (
    <StyledNavLink to={to}>
      {icon && <Icon name={icon} />}
      {label}
    </StyledNavLink>
  );
};

export { NavLink };
