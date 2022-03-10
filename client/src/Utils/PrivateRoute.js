
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    //const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    return (user && user.access) ? children : <Navigate to="/login" />;
}

export default PrivateRoute;