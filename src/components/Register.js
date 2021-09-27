import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import './Register.scss';

export const Register = ({user, errors, handleRegisterRequest, handleClearErrors}) => {

    const initialData = {
        phone: '',
        password: '',
        firstName: '',
        lastName: ''
    };
    const [data, setData] = useState(initialData);

    const onSubmit = (e) => {
        e.preventDefault();
        handleRegisterRequest(data);
    }

    useEffect(() => {
        handleClearErrors();
    }, [])

    if (!user) {
        return (
            <div className="register">
                <h2>Регистрация</h2>
                <form className="register__form" onSubmit={onSubmit}>
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
                        <span>Имя</span>
                        <input
                            type="text"
                            value={data.firstName}
                            onChange={(e) => setData({...data, firstName: e.target.value})}
                            required
                        />
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input
                            type="text"
                            value={data.lastName}
                            onChange={(e) => setData({...data, lastName: e.target.value})}
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
                    {errors.length !== 0 && errors.map((error, i) => (
                        <p className="register_error" key={error.param + i}>{error.msg}</p>
                    ))}
                    <button>Зарегистрироваться</button>
                    <Link to="/login">Авторизация</Link>
                </form>
            </div>
        );
    } else {
        return (
            <Redirect to="/personal"/>
        );
    }
}