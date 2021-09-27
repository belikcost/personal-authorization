import {
    END_PASSWORD_RECOVERY_FAIL,
    END_PASSWORD_RECOVERY_SUCCESS,
    GET_USER_SUCCESS,
    LOGIN_FAIL, LOGIN_REQUEST,
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

const initialState = {
    errors: [],
    messageWasSent: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case START_PASSWORD_RECOVERY_REQUEST:
            return {...state, errors: []};
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case START_PASSWORD_RECOVERY_FAIL:
        case END_PASSWORD_RECOVERY_FAIL:
            return {...state, errors: action.payload};
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case END_PASSWORD_RECOVERY_SUCCESS:
            return {...state, user: {token: action.payload}};
        case SET_TOKEN:
            localStorage.setItem('token', action.payload);
            return {...state, user: {token: action.payload}};
        case GET_USER_SUCCESS:
            const {first_name, last_name, ...data} = action.payload;
            return {...state, user: {...state.user, firstName: first_name, lastName: last_name, ...data}};
        case START_PASSWORD_RECOVERY_SUCCESS:
            return {...state, messageWasSent: true};
        case LOGOUT:
            localStorage.removeItem('token');
            return {...state, user: undefined};
        default:
            return state;
    }
}