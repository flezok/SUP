import { useState } from 'react';

const PopupNoAccess = ({ onCloseNoAccess }) => {



    return (
        <div className='popup popup__confirm'>
            <div className='popup__wrapper popup__confirm-wrapper'>
                <h3 className="popup__confirm-title">
                    У вас нет необходимого доступа
                </h3>

                <div className="popup__btns popup__confirm-btns">
                    <button onClick={onCloseNoAccess} className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Закрыть
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default PopupNoAccess;