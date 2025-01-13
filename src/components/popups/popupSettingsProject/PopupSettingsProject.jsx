import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import PopupConfirm from '../popupConfirm/PopupConfirm';

import './popupSettingsProject.scss'

const PopupSettingsProject = ({ onOpenSettingsProject, onOpenConfirm, openConfirm, confirmTitle }) => {
            
    const [projectAvatar, setProjectAvatar] = useState('/images/downloadPhoto2.svg');
    

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    
    
    // Функция для выбора фото
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Получаем выбранный файл
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProjectAvatar(e.target.result); // Устанавливаем новое изображение
            };
            reader.readAsDataURL(file); // Преобразуем файл в Data URL
        }
    };

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__settingsProject'>
            <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Настройки проекта
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenSettingsProject}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...' defaultValue={'старой название'}></input>
                    </div>

                    <div className="popup__img-wrapper">
                        <img className="popup__img-images" src={projectAvatar}></img>
                        <input className="popup__img-input" type="file" accept="image/*" onChange={handleImageChange}></input>
                    </div> 
                </div>

                <div className="popup__name-inner popup__description">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Описание
                    </label>
                    <textarea className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...' defaultValue={'Старое описание бла бла бла'}></textarea>
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

                <div className="popup__settingsProject-btn">
                    <button className="popup__members-btn settingsProject__btn-finish" onClick={() => onOpenConfirm("завершить")}>
                            <p className="popup__members-text">
                                Завершить проект
                            </p>
                    </button>
                </div>

                <div className="popup__settingsProject-btn">
                    <button className="popup__members-btn settingsProject__btn-delete" onClick={() => onOpenConfirm("удалить")}>
                            <p className="popup__members-text">
                                Удалить проект
                            </p>
                    </button>
                </div>

                <div className="popup__btns">
                    <button className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Создать
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onOpenSettingsProject}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>

            {openConfirm && <PopupConfirm onOpenConfirm={onOpenConfirm} confirmTitle={confirmTitle}/>}
        </div>
    )

}

export default PopupSettingsProject