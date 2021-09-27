import { all, call } from 'redux-saga/effects';

import registerWatcher from "./registerSaga";
import loginWatcher from "./loginSaga";
import getUserWatcher from "./getUserSaga";
import startPasswordRecoveryWatcher from "./startPasswordRecoverySaga";
import endPasswordRecoveryWatcher from "./endPasswordRecoverySaga";


export default function* mainSaga() {
    yield all([
        call(registerWatcher),
        call(loginWatcher),
        call(getUserWatcher),
        call(startPasswordRecoveryWatcher),
        call(endPasswordRecoveryWatcher)
    ]);
}