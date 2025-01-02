import { nav } from "@/modules/shared/constants/nav";
import { StyledUl } from "./nav.styles";
import { NavLink } from "@/modules/shared/ui/NavLink";

const Nav = () => {
  return (
    <nav>
      <StyledUl>
        {nav.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to} label={item.label} icon={item.icon} />
          </li>
        ))}
      </StyledUl>
    </nav>
  );
};

export { Nav };
