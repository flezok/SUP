import { useState } from 'react';

import './popupConfirm.scss'

const PopupConfirm = ({ onOpenConfirm, confirmTitle }) => {
            
    return (
        <div className='popup popup__confirm'>
            <div className='popup__wrapper popup__confirm-wrapper'>
                <h3 className="popup__confirm-title">
                    Вы уверены, что хотите {confirmTitle}?
                </h3>

                <div className="popup__btns popup__confirm-btns">
                    <button className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Подтвердить
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onOpenConfirm}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default PopupConfirm