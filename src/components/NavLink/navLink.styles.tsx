import styled from "@emotion/styled";
import { NavLink } from "react-router";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
