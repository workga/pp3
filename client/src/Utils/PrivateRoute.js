
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;