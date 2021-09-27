import { takeEvery, put, call } from 'redux-saga/effects';

import { API_URL, LOGIN_REQUEST } from "../constants";
import { loginFail, loginSuccess, setToken } from "../redux/actions";


const loginFetch = async (data) => {
    return await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(result => result.json());
}

function* loginSaga(action) {
    const {remember, ...data} = action.payload;
    const result = yield call(loginFetch, data);

    if (result.success) {
        if (remember) {
            yield put(setToken(result.token));
        }
        yield put(loginSuccess(result.token));
    } else {
        yield put(loginFail(result.errors));
    }
}

export default function* loginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginSaga);
}