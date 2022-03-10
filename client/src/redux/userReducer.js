
import { LOGIN_FAIL, LOGIN_SUCCESS, LOG_IN, LOG_OUT } from "./types";
import { useNavigate } from "react-router";
import axios from "axios";

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    user: null           
}

//user has unique id, name, 

export const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS);
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.data.access,
                refreshToken: action.data.refresh
            }

        case LOGIN_FAIL:
            console.log(LOGIN_FAIL)
            return state;


        case LOG_IN:
            console.log("LOG_IN");
            const userName = action.data.userName;
            const password = action.data.password;
            const navigate = action.navigate;

            axios.post('/api/token/', {
                email: userName,
                password: password
            })
            .then(function(response) {
                console.log(response.status);
                console.log(response.data);
                //navigate('/')
                console.log('dfd')
                return {
                    ...state,
                    isLoggedIn: true,
                    accessToken: response.data.access,
                    refreshToken: response.data.refresh,
                }
            })
            .catch(function(error){
                console.log(error.response)
                if (error.response)
                {
                    console.log(error.response.status)
                    console.log(error.response.data)
                    alert("Error! Wrong login or password!");
                    return state;
                    //console.log(error.response.data);
                }
                
            });

            

            /*
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
            */

            /*
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
            */

        case LOG_OUT:
            console.log("LOG_OUT");
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
                refreshToken: null,
                user: null
            }


        default:
            return state;
    }

}

