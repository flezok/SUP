import { useState } from 'react';

import './PopupSearch.scss'

const PopupSearch = () => {


    return (
        <div className='popup'>
            <div className='popup__wrapper'>
                <div className="popup__header">
                    <h3 className="popup__header-title">

                    </h3>
                    <button className="popup__header-close">

                    </button>
                </div>
                <div className="popup__items">
                    <div className="popup__items">
                        <div className="popup__item">
                            <img className="popup__item-img"></img>
                            <div className='popup__item-inner'>
                                <p className="popup__item-task">

                                </p>
                                <p className='popup__item-project'>

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