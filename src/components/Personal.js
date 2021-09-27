import { Redirect } from "react-router-dom";
import { useEffect } from "react";


export const Personal = ({user, handleGetUserRequest, handleLogout}) => {

    useEffect(() => {
        if (user && !user.id) {
            handleGetUserRequest(user.token);
        }
    }, [user]);

    if (user) {
        return (
            <div>
                {user.id ? (
                    <>
                        <p>Здравствуйте, {user.firstName}!</p>
                        <span onClick={handleLogout}>Выход</span>
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