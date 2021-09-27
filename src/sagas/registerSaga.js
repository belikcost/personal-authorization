import { takeEvery, put, call } from 'redux-saga/effects';

import { API_URL, REGISTER_REQUEST } from "../constants";
import { registerFail, registerSuccess } from "../redux/actions";


const registerFetch = async ({firstName, lastName, ...data}) => {
    return await fetch(`${API_URL}/user/registration`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({data, first_name: firstName, last_name: lastName})
    }).then(result => result.json());
}

function* registerSaga(action) {
    const result = yield call(registerFetch, action.payload);

    if (result.success) {
        yield put(registerSuccess(result.token));
    } else {
        yield put(registerFail(result.errors));
    }
}

export default function* registerWatcher() {
    yield takeEvery(REGISTER_REQUEST, registerSaga);
}