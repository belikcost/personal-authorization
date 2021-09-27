import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import './Login.scss';


export const Login = ({user, errors, handleLoginRequest, handleClearErrors}) => {
    const initialData = {
        phone: '',
        password: '',
        remember: true
    };
    const [data, setData] = useState(initialData);

    const onSubmit = (e) => {
        e.preventDefault();
        handleLoginRequest(data);
    }

    useEffect(() => {
        handleClearErrors();
    }, [])

    if (!user) {
        return (
            <div className="login">
                <h2>Авторизация</h2>
                <form className="login__form" onSubmit={onSubmit}>
                    <label>
                        <span>Телефон</span>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData({...data, phone: e.target.value})}
                            required
                        />
                    </label>
                    <label>
                        <span>Пароль</span>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData({...data, password: e.target.value})}
                            required
                        />
                    </label>
                    <div>
                        <span>Запомнить меня?</span>
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData({...data, remember: e.target.checked})}
                        />
                    </div>
                    {errors.length !== 0 && errors.map((error, i) => (
                        <p className="login_error" key={error.param + i}>{error.msg}</p>
                    ))}
                    <button>Войти</button>
                    <div>
                        <Link to="/register">Регистрация</Link>
                        <Link to="/password-recovery">Забыли пароль?</Link>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <Redirect to="/personal"/>
        );
    }
}