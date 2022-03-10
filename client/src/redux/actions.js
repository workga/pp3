import {
    LOG_IN,
    LOG_OUT,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./types"

export function userLogIn(userName, password, navigate) {
    return {
        type: LOG_IN,
        data: { userName, password },
        navigate : navigate
    }
}

export function successLogin(userData) {
    return {
        type: LOGIN_SUCCESS,
        data: userData
    }
}

export function failLogin() {
    return {
        type: LOGIN_FAIL
    }
}

export function userLogOut() {
    return {
        type: LOG_OUT
    }
}