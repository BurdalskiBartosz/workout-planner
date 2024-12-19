import { nav } from "@/constants/nav";
import { StyledUl } from "./nav.styles";
import { NavLink } from "@/components/NavLink";

const Nav = () => {
  return (
    <nav>
      <StyledUl>
        {nav.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to} label={item.label} icon={item.icon()} />
          </li>
        ))}
      </StyledUl>
    </nav>
  );
};

export { Nav };
