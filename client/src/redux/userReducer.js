
import { LOG_IN, LOG_OUT } from "./types";
import { useNavigate } from "react-router";

const initialState = {
    isLoggedIn: false,
    user: null           
}

//user has unique id, name, 

export const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case LOG_IN:
            console.log("LOG_IN");
            const userName = action.data.userName;
            const password = action.data.password;
            const navigate = action.navigate;

            const checkLogin = (login) => {
                if (login === "admin") {
                    return true;
                }
                return false;
            }

            const checkPassword = (password) => {
                if (password === "1234") {
                    return true;
                }
                return false;
            }

            if (checkLogin(userName) && checkPassword(password) ) {
                navigate('/profile');
                return {
                    ...state,
                    isLoggedIn: true,
                    user: {
                        userName: userName,
                        password: password
                    }
                }
            }
            else {
                //navigate('/');
                alert("Error! Wrong login or password!");
                return state;
            }
            //return state;


        case LOG_OUT:
            console.log("LOG_OUT");
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }


        default:
            return state;
    }

}

