import { useState } from 'react';
import DatePicker from "react-datepicker";
import { useNavigate, useRouteLoaderData, useRevalidator } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

import PopupConfirm from '../popupConfirm/PopupConfirm';

import './popupSettingsProject.scss'
import axios from 'axios';

const PopupSettingsProject = ({ onOpenSettingsProject, onOpenConfirm, openConfirm }) => {
    const revalidator = useRevalidator();
    const navigate = useNavigate();
    const projectData = useRouteLoaderData("project");

    const [projectAvatar, setProjectAvatar] = useState(projectData.projectAvatar);


    const [confirmOpened, setConfirm] = useState(false);
    const [confirmTitle, setTitle] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [formData, setForm] = useState({ title: projectData.title, description: projectData.description, dates: projectData.dates, projectAvatar });


    // Функция для выбора фото
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Получаем выбранный файл
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProjectAvatar(e.target.result); // Устанавливаем новое изображение
                setForm({ ...formData, projectAvatar: e.target.result });
            };
            reader.readAsDataURL(file); // Преобразуем файл в Data URL
        }
    };

    const handleProjectEdit = () => {
        axios.post(`http://localhost:3000/project/${projectData.id}/edit`, formData, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                revalidator.revalidate();
                navigate(`/project/${projectData.id}`);
            };
        });
    };

    const handleProjectDelete = () => {
        axios.delete(`http://localhost:3000/project/${projectData.id}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                navigate("/boards");
            };
        });
    };

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__settingsProject'>
                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Настройки проекта
                    </h3>
                    <button className='popup__close-btn' onClick={() => { navigate(-1); }}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input onChange={(e) => { setForm({ ...formData, title: e.target.value }); }} defaultValue={projectData.title} className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
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
                    <textarea onChange={(e) => { setForm({ ...formData, description: e.target.value }); }} defaultValue={projectData.description} className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...'></textarea>
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
                        startDate={projectData.dates[0]}
                        endDate={projectData.dates[1]}
                        onChange={(update) => {
                            setDateRange(update);
                            setForm({ ...formData, dates: update });
                        }}
                        isClearable={true}
                    />
                </div>

                <div className="popup__settingsProject-btn">
                    <button className="popup__members-btn settingsProject__btn-finish" onClick={() => { setTitle("завершить"); setConfirm(true); }}>
                        <p className="popup__members-text">
                            Завершить проект
                        </p>
                    </button>
                </div>

                <div className="popup__settingsProject-btn">
                    <button className="popup__members-btn settingsProject__btn-delete" onClick={() => { setTitle("удалить"); setConfirm(true); }}>
                        <p className="popup__members-text">
                            Удалить проект
                        </p>
                    </button>
                </div>

                <div className="popup__btns">
                    <button onClick={handleProjectEdit} className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Создать
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={() => { navigate(-1); }}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>

            {confirmOpened && <PopupConfirm handleProjectDelete={handleProjectDelete} onOpenConfirm={() => { setConfirm((prev) => !prev); }} confirmTitle={confirmTitle} />}
        </div>
    )

}

export default PopupSettingsProject