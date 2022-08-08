import React from "react";
import { BsFillPersonFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { Logo } from "components";
import { AuthGroup } from "./styled"
import { Button } from "react-bootstrap";

export const AuthButton: React.FC = ({ ...rest }) => {
  const { t } = useTranslation();
  const auth = useSelector(
      (state: RootState) => state.rootReducer.auth
  );
  const navigate = useNavigate();
  const navigateTo = React.useCallback((to) => navigate(to, {replace: true}), [navigate]);
  return (auth.isLoggedIn ?
    <AuthGroup data-testid="btn">
      <span className="mr-1">{auth?.user?.email}</span>
      <BsFillPersonFill/>
    </AuthGroup>
    :
    <AuthGroup data-testid="btn">
      <Button variant="outline-primary" onClick={() => navigateTo("/auth/signin")}>{t("auth.SignIn")}</Button>
      <Button onClick={() => navigateTo("/auth/signup")}>{t("auth.SignUp")}</Button>
    </AuthGroup>
  );
};
