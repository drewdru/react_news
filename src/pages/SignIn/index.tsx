import React from "react";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "components"
import SignInCard from "./signInCard"
import SignUpCard from "./signUpCard"

const SignIn: React.FC = () => {
  let { tab } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: RootState) => state.rootReducer.auth.isLoggedIn
  );
  if (isLoggedIn) {
    // TODO: If user redirect to next from query or to /
    navigate("/", {replace: true})
  }

  if (tab === "signup") {
    return <MainContainer><SignUpCard /></MainContainer>
  }

  return <MainContainer><SignInCard /></MainContainer>
};

export default SignIn;
