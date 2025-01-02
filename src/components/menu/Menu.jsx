import { useState } from 'react';

import './menu.scss'

const Menu = () => {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", label: "Главная", className: "menu__list-home" },
        { id: "boards", label: "Доски", className: "menu__list-board" },
        { id: "account", label: "Аккаунт", className: "menu__list-account" },
        { id: "employees", label: "Сотрудники", className: "menu__list-employees" },
    ];

    return (
        <>
            <nav className="menu">
                <ul className="menu__list">
                    <h3 className='menu__list-title'>
                        Меню
                    </h3>

                    {tabs.map((tab) => (
                            <li
                            key={tab.id}
                            className={`menu__list-item ${tab.className} ${
                                activeTab === tab.id ? "menu__list-item--active" : ""
                            }`}
                            onClick={() => setActiveTab(tab.id)} // Обновляем активный таб
                            >
                            <p className="menu__item-text">{tab.label}</p>
                            </li>
                    ))}
                </ul>
            </nav>

        </>
    )

}

export default Menu