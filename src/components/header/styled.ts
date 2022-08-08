import styled from "styled-components/macro";
import NavDropdown from "react-bootstrap/NavDropdown";

export const AuthNavDropdown = styled(NavDropdown)`
.dropdown-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dropdown-menu {
  left: unset;
  right: 0;
}
&.anonymous {
  .dropdown-menu {
    display: none!important;
  }
  .dropdown-toggle::after {
    display: none;
  }
}
`;
