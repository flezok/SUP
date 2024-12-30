import { useState } from 'react';

import './authorization.scss'

const Authorization = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };

    return (
        <div className='authorization'>
            <div className='authorization__form'>
                <h1 className='form__title'>Добро пожаловать!</h1>
                <form>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="email">Почта</label>
                        <input className='form__input' id="email" type="email" placeholder='Введите почту'></input>
                    </div>
                    <div className='form__inner'>
                        <label className='form__label' htmlFor="pass">Пароль</label>
                        <input className='form__input' 
                               id="pass" 
                               type={showPassword ? "text" : "password"}
                               placeholder='Введите пароль'
                               onChange={(e) => setPassword(e.target.value)}></input>
                        <button className='form__showPass' type='button' onClick={togglePasswordVisibility}>
                        
                        </button>
                    </div>
                    <button className="form__btn">
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