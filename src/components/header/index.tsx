import React from "react";
import { RootState } from "redux/reducers";
import { useAppDispatch } from "redux/store";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import { Logo, AuthButton, LangSwitch } from "components";
import { AuthNavDropdown } from "./styled"
import { signout } from "redux/slices/auth";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const auth = useSelector(
      (state: RootState) => state.rootReducer.auth
  );
  return (
    <Navbar expand="lg" data-testid="container">
      <LinkContainer to="/"><Navbar.Brand><Logo/></Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link>{t("header.Home")}</Nav.Link></LinkContainer>
          <LinkContainer to="/news"><Nav.Link>{t("header.News")}</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text><LangSwitch /></Navbar.Text>
        <Nav className="me-auto">
          <AuthNavDropdown className={`${
            auth.isLoggedIn ? "user" : "anonymous"
          }`} title={<AuthButton />} id="basic-nav-dropdown">
            <NavDropdown.ItemText>{t("header.SignedInAs")} <strong>{auth?.user?.email}</strong></NavDropdown.ItemText>
            <NavDropdown.Divider />
            <LinkContainer to="/profile">
              <NavDropdown.Item>{t("header.OpenProfile")}</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(signout())}>
              {t("header.SignOut")}
            </NavDropdown.Item>
          </AuthNavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
