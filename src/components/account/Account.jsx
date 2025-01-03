import { useState } from 'react';

import './account.scss'

const Account = () => {

    const [avatar, setAvatar] = useState('/images/avatarHeader.png');

    // Функция для выбора фото
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Получаем выбранный файл
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result); // Устанавливаем новое изображение
            };
            reader.readAsDataURL(file); // Преобразуем файл в Data URL
        }
    };

    // Клик по button открывает выбор файла
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
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
                            Дмитрий Травин
                        </p>
                        <p className="user__email">
                            flezokt@gmail.com
                        </p>
                    </div>

                    <div className="account__settings">
                        <h3 className='account__settings-title'>
                            Настройки аккаунта
                        </h3>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="FName">Имя</label>
                                <input className='settings__input' id="FName" type="text" placeholder='Дмитрий' readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="LName">Фамилия</label>
                                <input className='settings__input' id="LName" type="text" placeholder='Травин' readOnly></input>
                            </div>
                        </div>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="EmpId">ID Сотрудника</label>
                                <input className='settings__input' id="EmpId" type="text" placeholder='09-6364' readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="position">Должность</label>
                                <input className='settings__input' id="position" type="text" placeholder='Senior-Frontend' readOnly></input>
                            </div>
                        </div>

                        <div className='settings__inner-wrapper'>
                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="settingsMail">E-mail</label>
                                <input className='settings__input' id="settingsMail" type="email" placeholder='flezokt@gmail.com' readOnly></input>
                            </div>

                            <div className='settings__inner'>
                                <label className='settings__label' htmlFor="phoneNumber">Номер телефона</label>
                                <input className='settings__input' id="phoneNumber" type="tel" placeholder='+79879660084' readOnly></input>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </section>
    )

}

export default Account