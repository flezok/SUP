import { useState } from 'react';

import './popupEmployee.scss'

const PopupEmployee = ({ onEmployeePopup }) => {

        

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__employee'>
                <div className="popup__close-wrapper">
                    <button className='popup__close-btn employee__btn-close' onClick={onEmployeePopup}></button>
                </div>
                <h3 className="employee__title">
                    Senior-frontend разработчик
                </h3>
                
                <div className="employee__info-wrapper">
                    <div className='employee__info'>
                        <div className="employee__info-inner">
                            <img className='employee__info-img' src="../../../../public/images/avatarHeader.png"></img>
                            <div className="employee__info-name">
                                <p className="employee__info-text">Травин</p>
                                <p className="employee__info-text">Дмитрий</p>
                                <p className="employee__info-text">Андреевич</p>
                            </div>
                        </div>

                        <div className="employee__info-contact">
                            <p className="employee__info-text">email: flezokt@gmail.com</p>
                            <p className="employee__info-text">тел: +7 (987) - 966 - 00 - 84</p>
                        </div>
                    </div>
                </div>

                <div className="employee__projects">
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default PopupEmployee