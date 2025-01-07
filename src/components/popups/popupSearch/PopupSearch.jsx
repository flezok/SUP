import {  } from 'react';

import './popupSearch.scss'

const PopupSearch = ({ onSearchPopupClose }) => {


    return (
        <div className='popup__search'>
            <div className='popup__wrapper'>
                <div className="popup__header">
                    <h3 className="popup__header-title">
                        Результаты поиска
                    </h3>
                    <button className="popup__header-close" onClick={onSearchPopupClose}>

                    </button>
                </div>
                <div className="popup__items">
                    <div className="popup__items">
                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>

                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>

                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>

                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>

                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>

                        <div className="popup__item">
                            <img className="popup__item-img" src="../../../../public/images/searchImg.png"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">
                                    Задача А
                                </p>
                                <p className='popup__item-project'>
                                    Разработка приложения
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PopupSearch