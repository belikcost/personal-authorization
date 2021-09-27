import { useState } from "react";
import { Link, Redirect } from "react-router-dom";


export const Login = ({user, errors, handleLoginRequest}) => {
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

    if (!user) {
        return (
            <div>
                <form onSubmit={onSubmit}>
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
                    <label>
                        <span>Запомнить меня?</span>
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData({...data, remember: e.target.checked})}
                        />
                    </label>
                    {errors.length !== 0 && errors.map((error, i) => (
                        <p key={error.param + i}>{error.msg}</p>
                    ))}
                    <button>Войти</button>
                </form>
                <Link to="/register">Регистрация</Link>
                <Link to="/password-recovery">Забыли пароль?</Link>
            </div>
        );
    } else {
        return (
            <Redirect to="/personal"/>
        );
    }
}