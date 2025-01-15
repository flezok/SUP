import { useState } from 'react';
import DatePicker from "react-datepicker";

import PopupAddCheck from './popupAddCheck/PopupAddCheck';

import './popupSettingsTask.scss'

const PopupSettingsTask = ({ onOpenSettingsTask }) => {
        
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [activeItem, setActiveItem] = useState(1); // По умолчанию активен первый элемент
    const [check, setCheck] = useState(false);
    const [addCheck, setAddCheck] = useState(false);

    const handleItemClick = (index) => {
        setActiveItem(index); // Устанавливаем активный элемент по индексу
    };

    const onCreateCheck = () => {
        setCheck(!check)
    }

    const onAddCheck = () => {
        setAddCheck(!addCheck)
    }

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__task'>
                <div className="popup__close-wrapper">
                    
                    <button className='popup__close-btn' onClick={onOpenSettingsTask}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>
                </div>

                <div className="popup__name-inner popup__description">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Описание
                    </label>
                    <textarea className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...'></textarea>
                </div>

                <div className="popup__members">
                    <button className="popup__members-btn">
                        <p className="popup__members-text">
                            Добавить участников
                        </p>
                    </button>

                    

                    <div className="project__team-images popup__members-images">
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar1.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar2.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar3.png">

                            </img>
                        </div>
                    </div>
                </div>

                <div className="popup__members">
                    <button className="popup__members-btn popup__btn-priority">
                        <p className="popup__members-text">
                            Приоритет задачи
                        </p>
                    </button>

                    <div className="popup__priority-items">
                        {[1, 2, 3, 4, 5].map((priority, index) => (
                            <div
                                key={index}
                                className={`popup__priority-item ${activeItem === index ? 'popup__priority-item--active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <p className="popup__priority-item-text">{priority}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='popup__deadline'>
                    <label className="popup__deadline-btn popup__members-btn" htmlFor="date">
                        <p className="popup__deadline-text popup__members-text">
                            Выбрать даты
                        </p>
                    </label>
                    <DatePicker
                    id="date"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    isClearable={true}
                    />
                </div>

                {check ? (
                <div className="popup__check">
                    <div className="popup__check-header">
                        <div className="popup__members-btn popup__check-header-inner">
                            <p className="popup__check-text">Чек-лист</p>
                        </div>
                        
                        <button className="popup__check-btn" onClick={onCreateCheck}>
                            <p className="popup__check-btn-text">
                                Удалить
                            </p>
                        </button>
                    </div>

                    <ul className="popup__check-list">
                        <li className="popup__check-item">
                            <input className="popup__check-item-input" type='checkbox' id="check_input1"></input>
                            <label className="popup__check-item-text" htmlFor='check_input1'>Стейт выделенных пользователей</label>
                            <button className="check__item-delete">x</button>
                        </li>

                        <li className="popup__check-item">
                            <input className="popup__check-item-input" type='checkbox' id="check_input2"></input>
                            <label className="popup__check-item-text" htmlFor='check_input2'>Стейт lflflfl</label>
                            <button className="check__item-delete">x</button>
                        </li>
                        
                        
                    </ul>

                    <button className="check__create-btn popup__check-btn" onClick={onAddCheck}>
                        <p className="check__create-btn-text popup__check-btn-text">
                            Добавить элемент
                        </p>
                    </button>
                </div>
                ) : (
                <div className="popup__members">
                    <button className="popup__members-btn popup__btn-check" onClick={onCreateCheck}>
                        <p className="popup__members-text">
                            Создать чек-лист
                        </p>
                    </button>
                </div>
                )}

                
                
                

                <div className="popup__comments">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Комментарии
                    </label>
                    <textarea className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите комментарий...'></textarea>

                    <div className="popup__comments-btns">
                        <button className="popup__coments-btn">
                            <p className="popup__coments-btn-text">
                                Отправить
                            </p>
                        </button>
                        <button className="popup__coments-btn">
                            <p className="popup__coments-btn-text">
                                Отменить    
                            </p>
                        </button>
                    </div>
                </div>

                <div className="popup__comments-list">
                    <div className="popup__list-item">
                        <img className="popup__list-img"></img>
                        <div className="popup__list-inner">
                            <p className="popup__list-name">

                            </p>
                            <p className="popup__list-text">

                            </p>
                        </div>
                        <button className="popup__list-deletee">
                            
                        </button>
                    </div>
                </div>

                {addCheck && <PopupAddCheck onAddCheck={onAddCheck}/>}
                
                
            </div>
        </div>
    )

}

export default PopupSettingsTask