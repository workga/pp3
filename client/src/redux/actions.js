import {
    LOG_IN,
    LOG_OUT
} from "./types"

export function userLogIn(userName, password, navigate) {
    return {
        type: LOG_IN,
        data: { userName, password },
        navigate : navigate
    }
}

export function userLogOut() {
    return {
        type: LOG_OUT
    }
}