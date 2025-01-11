import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './menu.scss'

const Menu = () => {
    const [activeTab, setActiveTab] = useState("home");
    const location = useLocation(); // Получаем текущий путь страницы

    const tabs = [
        { id: "home", label: "Главная", className: "menu__list-home", path: '/'},
        { id: "boards", label: "Доски", className: "menu__list-board", path: '/boards'},
        { id: "account", label: "Аккаунт", className: "menu__list-account", path: '/account' },
        { id: "employees", label: "Сотрудники", className: "menu__list-employees", path: '/employees' }
    ];

    return (
        <>
            <nav className="menu">
                <ul className="menu__list">
                    <h3 className='menu__list-title'>
                        Меню
                    </h3>

                    {tabs.map((tab) => (
                            <Link   to={tab.path}
                                    key={tab.id}
                                    className={`menu__list-item ${tab.className} ${
                                        location.pathname === tab.path ? "menu__list-item--active" : ""
                                    }`}
                                    onClick={() => setActiveTab(tab.id)} // Обновляем активный таб
                            >
                            <p className="menu__item-text">{tab.label}</p>
                            </Link>
                    ))}
                </ul>
            </nav>

        </>
    )

}

export default Menu