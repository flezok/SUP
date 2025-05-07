import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegistrationSuccess from './registrationSuccess/registrationSuccess';

import '../authorization/authorization.scss'
import './registration.scss'
const Registration = () => {
    const navigate = useNavigate();

    // const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [formState, setForm] = useState({ email: "", firstName: "", lastName: "", middleName: "", password: "", number: "" })
    const [success, setSuccess] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user/register", formState).then((res) => {
            if (res.data.success) {
                // navigate("/auth");
                setSuccess(true)
            }
        });
    }

    const closeSuccess = () => {
        setSuccess(false);
    }

    return (
        <div className='authorization registration'>
            <div className='authorization__form'>
                <h1 className='form__title'>Добро пожаловать!</h1>
                <form className="form__registration">
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="firstName">Имя</label>
                        <input onChange={(e) => { setForm({ ...formState, firstName: e.target.value }) }} className='form__input' id="name" type="text" placeholder='Введите имя'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="lastName">Фамилия</label>
                        <input onChange={(e) => { setForm({ ...formState, lastName: e.target.value }) }} className='form__input' id="surname" type="text" placeholder='Введите фамилию'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="middleName">Отчество</label>
                        <input onChange={(e) => { setForm({ ...formState, middleName: e.target.value }) }} className='form__input' id="middleName" type="text" placeholder='Введите отчество'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="email">Почта</label>
                        <input onChange={(e) => { setForm({ ...formState, email: e.target.value }) }} className='form__input' id="email" type="email" placeholder='Введите почту'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="number">Телефон</label>
                        <input onChange={(e) => { setForm({ ...formState, number: e.target.value }) }} className='form__input' id="number" type="number" placeholder='Введите номер телефона'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="pass">Пароль</label>
                        <input className='form__input' 
                               id="pass" 
                               type={showPassword ? "text" : "password"}
                               placeholder='Введите пароль'
                               onChange={(e) => { setForm({ ...formState, password: e.target.value }) }}></input>
                        <button className='form__showPass' type='button' onClick={togglePasswordVisibility}>
                        
                        </button>
                    </div>
                    <button onClick={handleSubmit} className="form__btn">
                        Войти
                    </button>
                </form>
            </div>
            {success && <RegistrationSuccess closeSuccess={closeSuccess}/>}
        </div>
    )

}

export default Registration