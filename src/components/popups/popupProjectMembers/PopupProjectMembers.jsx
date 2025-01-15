import {  } from 'react';

import './popupProjectMembers.scss'

const PopupProjectMembers = ({ onOpenProjectMembers, onEmployeePopup }) => {
    

        

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__project-members'>
                
                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Участники проекта
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenProjectMembers}>

                    </button>
                </div>

                <ul className="popup__add-items popup__items-members">
                    <li className="popup__add-item" onClick={onEmployeePopup}>
                        <div className="popup__add-item-wrapper">
                            <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                            <p className="popup__add-item-name">
                                Дмитрий Травин
                            </p>
                        </div>
                        <div className="popup__add-item-wrapper">
                            <p className="popup__add-item-name popup__members-pos">
                                Senior-fronrent разработчик
                            </p>
                        </div>
                    </li>

                    <li className="popup__add-item" onClick={onEmployeePopup}>
                        <div className="popup__add-item-wrapper">
                            <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                            <p className="popup__add-item-name">
                                Дмитрий Травин
                            </p>
                        </div>
                        <div className="popup__add-item-wrapper">
                            <p className="popup__add-item-name popup__members-pos">
                                Senior-fronrent разработчик
                            </p>
                        </div>
                    </li>

                    <li className="popup__add-item" onClick={onEmployeePopup}>
                        <div className="popup__add-item-wrapper">
                            <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                            <p className="popup__add-item-name">
                                Дмитрий Травин
                            </p>
                        </div>
                        <div className="popup__add-item-wrapper">
                            <p className="popup__add-item-name popup__members-pos">
                                Senior-fronrent разработчик
                            </p>
                        </div>
                    </li>

                    
                    
                </ul>
                
                
            </div>
        </div>
    )

}

export default PopupProjectMembers