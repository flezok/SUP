import { useState } from 'react';

import './popupAddCheck.scss'

const PopupAddCheck = ({ onAddCheck }) => {
            
    return (
        <div className='popup popup__confirm'>
            <div className='popup__wrapper popup__confirm-wrapper popup__addCheck'>
                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название подзадачи
                        </label>
                        <input className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>
                </div>

                <div className="popup__btns popup__confirm-btns">
                    <button className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Подтвердить
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onAddCheck}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default PopupAddCheck