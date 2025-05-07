import { useState } from 'react';

const RegistrationSuccess = ({ closeSuccess }) => {



    return (
        <div className='popup popup__confirm'>
            <div className='popup__wrapper popup__confirm-wrapper'>
                <h3 className="popup__confirm-title">
                    Пользователь успешно зарегистрирован
                </h3>

                <div className="popup__btns popup__confirm-btns">
                    <button onClick={closeSuccess} className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Подтвердить
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default RegistrationSuccess;