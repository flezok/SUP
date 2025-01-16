import { useState } from 'react';
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
                            3/23 задач
                        </p>
                    </div>

                    <div className="tasks__item tasks__item-overdue">
                        <img className='tasks__item-img' src="../../../public/images/overdue.png"></img>
                        <p className='tasks__item-name'>
                            Просроченные
                        </p>
                        <p className='tasks__item-count'>
                            13/14 задач
                        </p>
                    </div>

                    <div className="tasks__item tasks__item-pending">
                        <img className='tasks__item-img' src="../../../public/images/pending.png"></img>
                        <p className='tasks__item-name'>
                            Действующие
                        </p>
                        <p className='tasks__item-count'>
                            23/34 задач
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
                            Супер проект 2025
                        </h3>
                        <p className="visit__item-text">
                            описание моего супер проекта по разработке супер приложения супер людьми
                        </p>
                    </div>

                    <div className="visit__item" onClick={onProjectClick}>
                        <img className='visit__item-img' src="../../../public/images/projectLast.jpg"></img>
                        <h3 className="visit__item-title">
                            Супер проект 2025
                        </h3>
                        <p className="visit__item-text">
                            описание моего супер проекта по разработке супер приложения супер людьми
                        </p>
                    </div>

                    <div className="visit__item" onClick={onProjectClick}>
                        <img className='visit__item-img' src="../../../public/images/projectLast.jpg"></img>
                        <h3 className="visit__item-title">
                            Супер проект 2025
                        </h3>
                        <p className="visit__item-text">
                            описание моего супер проекта по разработке супер приложения супер людьми
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home