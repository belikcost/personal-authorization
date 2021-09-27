import { Redirect } from "react-router-dom";
import { useEffect } from "react";

import './Personal.scss';


export const Personal = ({user, handleGetUserRequest, handleLogout}) => {

    useEffect(() => {
        if (user && !user.id) {
            handleGetUserRequest(user.token);
        }
    }, [user]);

    if (user) {
        return (
            <div className="personal">
                <h2>Личный кабинет</h2>
                {user.id ? (
                    <>
                        <p>Здравствуйте, {user.firstName}!</p>
                        <span className="personal__logout" onClick={handleLogout}>Выход</span>
                    </>
                ) : (
                    <p>Загрузка...</p>
                )}
            </div>
        );
    } else {
        return (
            <Redirect to="/login"/>
        );
    }
}