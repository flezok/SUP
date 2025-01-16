import { useState } from 'react';

import './popupAddMemberProject.scss'

const PopupAddMemberProject = ({ onOpenAddMember, availableUsers }) => {



    return (
        <div className="popup__members-add">
            <div className='popup__add-wrapper'>
                <h3 className='popup__add-title'>
                    Сотрудники
                </h3>
                <button className="popup__add-close" onClick={onOpenAddMember}></button>
            </div>
            <input className="popup__add-input" type="text" placeholder='Поиск сотрудников'></input>
            <ul className="popup__add-items">
                {
                    !availableUsers.isLoading && availableUsers.data.map((addUser) => (
                        <li key={addUser.id} className="popup__add-item">
                            <div className="popup__add-item-wrapper">
                                <img className="popup__add-item-img" src={addUser.avatarBase64 ? addUser.avatarBase64 : '/images/defaultUser.png'}></img>
                                <p className="popup__add-item-name">
                                    {addUser.firstName} {addUser.lastName}
                                </p>
                            </div>
                            <div className="popup__add-item-check"></div>
                        </li>
                    ))
                }
                {/* <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>
                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>
                
                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li> */}
            </ul>
        </div>
    )

}

export default PopupAddMemberProject