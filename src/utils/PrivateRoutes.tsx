import { Outlet, Navigate } from "react-router-dom"
import { RootState } from "redux/reducers";
import { useSelector } from "react-redux";

const PrivateRoutes = (): JSX.Element => {
    const isLoggedIn = useSelector(
        (state: RootState) => state.rootReducer.auth.isLoggedIn
    );
    return (
        isLoggedIn ? <Outlet/> : <Navigate to="/react_news/auth/login"/>
    );
};

export default PrivateRoutes