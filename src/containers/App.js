import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import {
    clearErrors,
    endPasswordRecoveryRequest,
    getUserRequest,
    loginRequest, logout,
    registerRequest,
    setToken,
    startPasswordRecoveryRequest
} from "../redux/actions";

import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Personal } from "../components/Personal";
import { PasswordRecovery } from "../components/PasswordRecovery";


const App = ({
                 user,
                 errors,
                 messageWasSent,
                 handleRegisterRequest,
                 handleLoginRequest,
                 handleGetUserRequest,
                 handleSetToken,
                 handleStartPasswordRecoveryRequest,
                 handleEndPasswordRecoveryRequest,
                 handleLogout,
                 handleClearErrors
             }) => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            handleSetToken(token);
        }
    }, []);

    return (
        <Switch>
            <Route exact path="/">
                {user ? (
                    <Redirect to="/personal"/>
                ) : (
                    <Redirect to="/login"/>
                )}
            </Route>
            <Route path="/login">
                <Login
                    user={user}
                    errors={errors}
                    handleLoginRequest={handleLoginRequest}
                    handleClearErrors={handleClearErrors}
                />
            </Route>
            <Route path="/register">
                <Register
                    user={user}
                    errors={errors}
                    handleRegisterRequest={handleRegisterRequest}
                    handleClearErrors={handleClearErrors}
                />
            </Route>
            <Route path="/personal">
                <Personal
                    user={user}
                    handleGetUserRequest={handleGetUserRequest}
                    handleLogout={handleLogout}
                />
            </Route>
            <Route path="/password-recovery">
                <PasswordRecovery
                    user={user}
                    errors={errors}
                    messageWasSent={messageWasSent}
                    handleStartPasswordRecoveryRequest={handleStartPasswordRecoveryRequest}
                    handleEndPasswordRecoveryRequest={handleEndPasswordRecoveryRequest}
                    handleClearErrors={handleClearErrors}
                />
            </Route>
        </Switch>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    errors: state.errors,
    messageWasSent: state.messageWasSent
});

const mapDispatchToProps = (dispatch) => ({
    handleRegisterRequest: (data) => dispatch(registerRequest(data)),
    handleLoginRequest: (data) => dispatch(loginRequest(data)),
    handleGetUserRequest: (data) => dispatch(getUserRequest(data)),
    handleSetToken: (data) => dispatch(setToken(data)),
    handleStartPasswordRecoveryRequest: (data) => dispatch(startPasswordRecoveryRequest(data)),
    handleEndPasswordRecoveryRequest: (data) => dispatch(endPasswordRecoveryRequest(data)),
    handleLogout: () => dispatch(logout()),
    handleClearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);