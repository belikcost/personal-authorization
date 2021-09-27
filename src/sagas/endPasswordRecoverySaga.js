import { takeEvery, put, call } from 'redux-saga/effects';

import { API_URL, END_PASSWORD_RECOVERY_REQUEST } from "../constants";
import { endPasswordRecoveryFail, endPasswordRecoverySuccess } from "../redux/actions";


const endPasswordRecoveryFetch = async (data) => {
    return await fetch(`${API_URL}/user/forgot-end`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            data
        })
    }).then(result => result.json());
}

function* endPasswordRecoverySaga(action) {
    const result = yield call(endPasswordRecoveryFetch, action.payload);

    if (result.success) {
        yield put(endPasswordRecoverySuccess(result.token));
    } else {
        yield put(endPasswordRecoveryFail(result.errors));
    }
}

export default function* endPasswordRecoveryWatcher() {
    yield takeEvery(END_PASSWORD_RECOVERY_REQUEST, endPasswordRecoverySaga);
}