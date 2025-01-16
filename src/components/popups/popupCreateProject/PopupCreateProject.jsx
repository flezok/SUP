import { useState } from 'react';
import DatePicker from "react-datepicker";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

import PopupAddMemberProject from '../popupAddMemberProject/PopupAddMemberProject';

import './popupCreateProject.scss'

const PopupCreateProject = ({ onOpenCreateProject, onOpenAddMember, openAddMember }) => {
    const availableUsers = useQuery({
        queryKey: ["projectPopupAvailableUsers"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/user/forProject", { withCredentials: true });
            return data;
        }
    });

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
            <div className='popup__wrapper'>


                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Создание проекта
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenCreateProject}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
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
                    <textarea className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...'></textarea>
                </div>

                <div className="popup__members">
                    <button className="popup__members-btn" onClick={onOpenAddMember}>
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

                <div className="popup__btns">
                    <button className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Создать
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onOpenCreateProject}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

                {openAddMember && <PopupAddMemberProject availableUsers={availableUsers} onOpenAddMember={onOpenAddMember} />}

            </div>
        </div>
    )

}

export default PopupCreateProject