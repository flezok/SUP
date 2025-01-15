import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './authorization.scss'

const Authorization = () => {
    const navigate = useNavigate();

    // const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setForm] = useState({ email: "", password: "" });

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user/login", formData, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                navigate("/");
            };
        });
    };

    return (
        <div className='authorization'>
            <div className='authorization__form'>
                <h1 className='form__title'>Добро пожаловать!</h1>
                <form>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="email">Почта</label>
                        <input className='form__input'
                               id="email" 
                               type="email" 
                               placeholder='Введите почту'
                               onChange={(e) => setForm({ ...formData, email: e.target.value })}></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="pass">Пароль</label>
                        <input className='form__input' 
                               id="pass" 
                               type={showPassword ? "text" : "password"}
                               placeholder='Введите пароль'
                               onChange={(e) => setForm({ ...formData, password: e.target.value })}></input>
                        <button className='form__showPass' type='button' onClick={togglePasswordVisibility}>
                        
                        </button>
                    </div>
                    <button className="form__btn" onClick={handleSubmit}>
                        Войти
                    </button>
                </form>
            </div>
            <div className='authorization__logo'>
                <img className='logo__img' alt="лого компании" src="../../public/images/logo.png"></img>
                <h3 className='logo__name'>Глава</h3>
                <p className='logo__text'>Социальная сеть нового поколения!</p>
            </div>
        </div>
    )

}

export default Authorization