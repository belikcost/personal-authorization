import { useState } from "react";
import { Link, Redirect } from "react-router-dom";


export const Register = ({user, errors, handleRegisterRequest}) => {

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
                        <p key={error.param + i}>{error.msg}</p>
                    ))}
                    <button>Зарегистрироваться</button>
                </form>
                <Link to="/login">Авторизация</Link>
            </div>
        );
    } else {
        return (
            <Redirect to="/personal"/>
        );
    }
}