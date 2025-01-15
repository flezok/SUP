import { useState } from 'react';
import axios from "axios";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

import './account.scss'

const Account = () => {
    const navigate = useNavigate();
    const data = useRouteLoaderData("root");
    console.log(data);

    const [avatar, setAvatar] = useState(data.avatarBase64);

    // Функция для выбора фото
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Получаем выбранный файл
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result); // Устанавливаем новое изображение
                axios.post("http://localhost:3000/user/changeAvatar", { avatar: e.target.result }, { withCredentials: true }).then((res) => {
                    if (res.data.success) {
                        console.log("Аватарка поменялось");
                    };
                });
            };
            reader.readAsDataURL(file); // Преобразуем файл в Data URL
        }
    };

    // Клик по button открывает выбор файла
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleLogout = () => {
        axios.get("http://localhost:3000/user/logout", { withCredentials: true }).then((res) => {
            if (res.data.success) {
                navigate("/auth");
            };
        });
        
    };

    return (
        <section className='account'>
            <h2 className='account__title'>
                Аккаунт
            </h2>

            <div className='account__container'>
                <div className="account__logo">
                    <div className="account__logo-img"></div>
                    <p className='account__logo-company'>
                        Новая Глава
                    </p>
                </div>

                <div className="account__wrapper">
                    <div className="account__user">
                        <div className='user__avatar'>
                            <img className="user__avatar-img" src={avatar}></img>
                            <input className='user__avatar-input'
                                    type="file"
                                    id="fileInput"
                                    accept="image/*"
                                    onChange={handleImageChange}
                            />
                            <button className="user__avatar-btn" onClick={handleButtonClick}></button>
                        </div>
                        <p className="user__name">
                            {data.firstName}
                        </p>
                        <p className="user__email">
                            {data.email}
                        </p>

                        <button  className="account__exit" onClick={handleLogout}>
                            <p className="account__exit-text">Выйти из аккаунта</p>
                        </button>
                    </div>

                    <div className="account__settings">
                        <h3 className='account__settings-title'>
                            Настройки аккаунта
                        </h3>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="FName">Имя</label>
                                <input className='settings__input' id="FName" type="text" placeholder={data.firstName} readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="LName">Фамилия</label>
                                <input className='settings__input' id="LName" type="text" placeholder={data.lastName} readOnly></input>
                            </div>
                        </div>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="PName">Отчество</label>
                                <input className='settings__input' id="pName" type="text" placeholder={data.middleName} readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="position">Должность</label>
                                <input className='settings__input' id="position" type="text" placeholder={data.position ? data.position : 'Не назначено'} readOnly></input>
                            </div>
                        </div>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="settingsMail">E-mail</label>
                                <input className='settings__input' id="settingsMail" type="email" placeholder={data.email} readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="phoneNumber">Номер телефона</label>
                                <input className='settings__input' id="phoneNumber" type="tel" placeholder={data.number} readOnly></input>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </section>
    )

}

export default Account