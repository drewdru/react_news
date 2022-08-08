import React from "react";
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledThemeProvider } from "definitions/styled-components";
import GlobalStyle from './styles/globalStyles';
import "./i18n";
import PrivateRoutes from './utils/PrivateRoutes'

import { DefaultLayout } from "layouts";

import Home from "pages/Home";
import SignIn from "pages/SignIn";
import News from "pages/News";
import Profile from "pages/Profile";
import { refreshtoken } from "redux/slices/auth";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const refreshToken = useSelector(
      (state: RootState) => state.rootReducer.auth.refreshToken
  );

  React.useEffect(() => {
    if(refreshToken) {
      dispatch(refreshtoken({ refreshToken }))
    }
  }, [refreshToken, dispatch])

  return (
    <StyledThemeProvider>
      <GlobalStyle />
      <Router>
        <DefaultLayout>
          <Routes>
            <Route element={<Home/>} path="/react_news/"/>
            <Route element={<News/>} path="/react_news/news"/>
            <Route element={<SignIn/>} path="/react_news/auth/:tab"/>
            <Route element={<PrivateRoutes />}>
              <Route element={<Profile/>} path="/react_news/profile"/>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </DefaultLayout>
      </Router>
    </StyledThemeProvider>
  );
}

export default App;
