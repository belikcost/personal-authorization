import {
    END_PASSWORD_RECOVERY_FAIL,
    END_PASSWORD_RECOVERY_REQUEST,
    END_PASSWORD_RECOVERY_SUCCESS,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SET_TOKEN,
    START_PASSWORD_RECOVERY_FAIL,
    START_PASSWORD_RECOVERY_REQUEST,
    START_PASSWORD_RECOVERY_SUCCESS
} from "../constants";


export const registerRequest = (data) => ({type: REGISTER_REQUEST, payload: data});
export const registerFail = (data) => ({type: REGISTER_FAIL, payload: data});
export const registerSuccess = (data) => ({type: REGISTER_SUCCESS, payload: data});

export const loginRequest = (data) => ({type: LOGIN_REQUEST, payload: data});
export const loginFail = (data) => ({type: LOGIN_FAIL, payload: data});
export const loginSuccess = (data) => ({type: LOGIN_SUCCESS, payload: data});

export const getUserRequest = (data) => ({type: GET_USER_REQUEST, payload: data});
export const getUserSuccess = (data) => ({type: GET_USER_SUCCESS, payload: data});

export const setToken = (data) => ({type: SET_TOKEN, payload: data});

export const startPasswordRecoveryRequest = (data) => ({type: START_PASSWORD_RECOVERY_REQUEST, payload: data});
export const startPasswordRecoveryFail = (data) => ({type: START_PASSWORD_RECOVERY_FAIL, payload: data});
export const startPasswordRecoverySuccess = () => ({type: START_PASSWORD_RECOVERY_SUCCESS});

export const endPasswordRecoveryRequest = (data) => ({type: END_PASSWORD_RECOVERY_REQUEST, payload: data});
export const endPasswordRecoveryFail = (data) => ({type: END_PASSWORD_RECOVERY_FAIL, payload: data});
export const endPasswordRecoverySuccess = (data) => ({type: END_PASSWORD_RECOVERY_SUCCESS, payload: data});

export const logout = () => ({type: LOGOUT});