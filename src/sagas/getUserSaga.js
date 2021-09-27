import { takeEvery, put, call } from 'redux-saga/effects';

import { API_URL, GET_USER_REQUEST } from "../constants";
import { getUserSuccess } from "../redux/actions";


const getUserFetch = async (token) => {
    return await fetch(`${API_URL}/user`, {
        headers: {
            'Authorization': token
        }
    }).then(result => result.json());
}

function* getUserSaga(action) {
    const result = yield call(getUserFetch, action.payload);
    yield put(getUserSuccess(result));
}

export default function* getUserWatcher() {
    yield takeEvery(GET_USER_REQUEST, getUserSaga);
}