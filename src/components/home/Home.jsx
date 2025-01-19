import {  } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.scss'

const Home = () => {
    const navigate = useNavigate();

    const onProjectClick = () => {
        navigate('/project');
    };

    const onBoardsClick = () => {
        navigate('/boards');
    };

    return (
        <section>
            <div className='tasks'>
                <h2 className="tasks__title">
                    Мои задачи
                </h2>
                <div className="tasks__items">
                    <div className="tasks__item tasks__item-priority">
                        <img className='tasks__item-img' src="../../../public/images/priority.png"></img>
                        <p className='tasks__item-name'>
                            Приоритетные
                        </p>
                        <p className='tasks__item-count'>
                            23/34 задач
                        </p>
                    </div>

                    <div className="tasks__item tasks__item-upcoming">
                        <img className='tasks__item-img' src="../../../public/images/upcoming.png"></img>
                        <p className='tasks__item-name'>
                            Предстоящие
                        </p>
                        <p className='tasks__item-count'>
                            4/34 задач
                        </p>
                    </div>

                    <div className="tasks__item tasks__item-overdue">
                        <img className='tasks__item-img' src="../../../public/images/overdue.png"></img>
                        <p className='tasks__item-name'>
                            Просроченные
                        </p>
                        <p className='tasks__item-count'>
                            2/34 задач
                        </p>
                    </div>

                    <div className="tasks__item tasks__item-pending">
                        <img className='tasks__item-img' src="../../../public/images/pending.png"></img>
                        <p className='tasks__item-name'>
                            Действующие
                        </p>
                        <p className='tasks__item-count'>
                            30/34 задач
                        </p>
                    </div>


                </div>
            </div>

            <div className="visit">
                <div className="visit__header">
                    <h2 className="visit__header-title">
                        Последние проекты
                    </h2>
                    <p className="visit__header-link" onClick={onBoardsClick}>
                        Все доски
                    </p>
                </div>

                <div className="visit__items">
                    <div className="visit__item" onClick={onProjectClick}>
                        <img className='visit__item-img' src="../../../public/images/projectLast.jpg"></img>
                        <h3 className="visit__item-title">
                            Проект по разработке
                        </h3>
                        <p className="visit__item-text">
                            Разработка фронтенд-части приложения включает реализацию пользовательского интерфейса на основе готового дизайна
                        </p>
                    </div>

                    <div className="visit__item" onClick={onProjectClick}>
                        <img className='visit__item-img' src="../../../public/images/disigneImgjpg.jpg"></img>
                        <h3 className="visit__item-title">
                            Проект по дизайну
                        </h3>
                        <p className="visit__item-text">
                                Дизайн охватывает разработку визуальной части приложения, включая структуру интерфейса, его элементы и общий стиль.
                        </p>
                    </div>

                    <div className="visit__item" onClick={onProjectClick}>
                        <img className='visit__item-img' src="../../../public/images/backImg.png"></img>
                        <h3 className="visit__item-title">
                            Серверная часть
                        </h3>
                        <p className="visit__item-text">
                            Разработка серверной части включает реализацию логики приложения на стороне сервера, обработку данных и их передачу между клиентом (фронтендом) и базой данных.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home