import { } from 'react';
import { useRouteLoaderData } from "react-router-dom";

import './header.scss'
import axios from 'axios';

const Header = ({ onSearchPopupOpen, onOpenCreateProject, setQuery }) => {

    const data = useRouteLoaderData("root");

    const getUserFromServer = () => {
        axios.get("http://localhost:3000/user/check", { withCredentials: true }).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <>
            <header className="header">
                <div className="header__company">
                    <div className='company__wrapper'>
                        <img className='company__logo' alt='логотип компании' src="../../public/images/logoHeader.png"></img>
                        <button className="comnamy__menu-media"></button>
                    </div>
                    <p className='company__name' onClick={getUserFromServer}>
                        Новая Глава
                    </p>
                </div>

                <div className='header__container'>
                    <div className='header__search-wrapper'>
                        <input className="header__search"
                            type="text"
                            placeholder='Поиск задачи'
                            onChange={(e) => { setQuery(e.target.value) }}
                            onFocus={onSearchPopupOpen}></input>
                    </div>

                    <div className='header__container-wrapper'>
                        <button className="header__btn" onClick={onOpenCreateProject}>
                            <p className="header__btn-text">
                                Создать проект
                            </p>
                        </button>
                        <img className="header__avatar" alt="фото сотрудника" src={`${data.avatarBase64}`}></img>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header