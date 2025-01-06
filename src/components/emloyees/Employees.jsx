import { useState } from 'react';

import './employees.scss'

const Employees = () => {


    return (
        <section className='employees'>
            <h2 className='account__title'>
                Сотрудники
            </h2>

            <div className="employees__content">
                <ul className="employees__tabs">
                    <h3 className="employees__tabs-title">
                        Должность
                    </h3>
                    <li className='employees__tabs-item employees__tabs-item--active'>
                        <p className="employees__tabs-text">
                            Project manager
                        </p>
                    </li>
                    <li className='employees__tabs-item'>
                        <p className="employees__tabs-text">
                            Senior-dev
                        </p>
                    </li>
                    <li className='employees__tabs-item'>
                        <p className="employees__tabs-text">
                            Middle-dev
                        </p>
                    </li>
                    <li className='employees__tabs-item'>
                        <p className="employees__tabs-text">
                            Junior-dev
                        </p>
                    </li>
                    <li className='employees__tabs-item'>
                        <p className="employees__tabs-text">
                            Designer
                        </p>
                    </li>
                </ul>

                <div className='employees__container'>
                    <h3 className='employees__items-title boards__items-title'>
                        Project manager
                    </h3>
                    <div className="employees__items">
                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Травин Дмитрий
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    5
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>

                        <div className="boards__item">
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Бурдина Алёна
                            </h4>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Проекты:
                                </p>
                                <p className="boards__item-text">
                                    52
                                </p>
                            </div>

                            <div className="boards__item-inner">
                                <p className='boards__item-text'>
                                    Задачи:
                                </p>
                                <p className="boards__item-text">
                                    522
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )

}

export default Employees