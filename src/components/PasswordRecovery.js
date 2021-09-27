import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";


export const PasswordRecovery = ({
                                     user,
                                     errors,
                                     messageWasSent,
                                     handleStartPasswordRecoveryRequest,
                                     handleEndPasswordRecoveryRequest
                                 }) => {
    const initialData = {
        phone: '',
        code: '',
        password: ''
    };
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!messageWasSent) {
            setIsLoading(true);
            handleStartPasswordRecoveryRequest(data.phone);
        } else {
            setIsLoading(true);
            handleEndPasswordRecoveryRequest(data);
        }
    }

    useEffect(() => {
        if (messageWasSent || errors.length !== 0) {
            setIsLoading(false);
        }
    }, [messageWasSent, errors]);

    const onChange = (name, value) => setData({...data, [name]: value});

    if (!user) {
        return (
            <div>
                {!isLoading ? (
                    <form onSubmit={onSubmit}>
                        {messageWasSent ? (
                            <>
                                <label>
                                    <span>Код из СМС</span>
                                    <input
                                        value={data.code}
                                        onChange={(e) => onChange('code', e.target.value)}
                                        type="text"
                                        required
                                    />
                                </label>
                                <label>
                                    <span>Новый пароль</span>
                                    <input
                                        value={data.password}
                                        onChange={(e) => onChange('password', e.target.value)}
                                        type="password"
                                        required
                                    />
                                </label>
                            </>
                        ) : (
                            <label>
                                <span>Телефон</span>
                                <input
                                    value={data.phone}
                                    onChange={(e) => onChange('phone', e.target.value)}
                                    type="text"
                                    required
                                />
                            </label>
                        )}
                        {errors.length !== 0 && errors.map((error, i) => (
                            <p key={error.param + i}>{error.msg}</p>
                        ))}
                        <button>Отправить</button>
                    </form>
                ) : (
                    <p>Загрузка...</p>
                )}

                <Link to="/login">Вспомнил пароль!</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        );
    } else {
        return (
            <Redirect to="/personal"/>
        );
    }
}