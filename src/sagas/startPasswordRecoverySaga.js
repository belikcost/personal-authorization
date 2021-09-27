import { takeEvery, put, call } from 'redux-saga/effects';

import { API_URL, START_PASSWORD_RECOVERY_REQUEST } from "../constants";
import { startPasswordRecoveryFail, startPasswordRecoverySuccess } from "../redux/actions";


const startPasswordRecoveryFetch = async (phone) => {
    return await fetch(`${API_URL}/user/forgot-start`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            phone
        })
    }).then(result => result.json());
}

function* startPasswordRecoverySaga(action) {
    const result = yield call(startPasswordRecoveryFetch, action.payload);

    if (result.success) {
        yield put(startPasswordRecoverySuccess());
    } else {
        yield put(startPasswordRecoveryFail(result.errors));
    }
}

export default function* startPasswordRecoveryWatcher() {
    yield takeEvery(START_PASSWORD_RECOVERY_REQUEST, startPasswordRecoverySaga);
}