import { useState } from 'react';

import './header.scss'

const Header = () => {


    return (
        <header className="header">
            <div className="header__company">
                <div className='company__wrapper'>
                    <img className='company__logo' alt='логотип компании' src="../../public/images/logoHeader.png"></img>
                </div>
                <p className='company__name'>
                    Новая Глава
                </p>
            </div>

            <div className='header__container'>
                <div className='header__search-wrapper'>
                    <input className="header__search" type="text" placeholder='Поиск задачи'></input>
                </div>

                <div className='header__container-wrapper'>
                    <button className="header__btn">
                        <p className="header__btn-text">
                            Создать проект
                        </p>
                    </button>
                    <img className="header__avatar" alt="фото сотрудника" src="../../public/images/avatarHeader.png"></img>
                </div>
            </div>
        </header>
    )

}

export default Header