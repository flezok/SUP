import { useState } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';

import "react-datepicker/dist/react-datepicker.css";

import './popupCreateTask.scss'

const PopupCreateTask = ({ onOpenCreateTask, projectId, lastClickedStage }) => {
    const client = useQueryClient();

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [activeItem, setActiveItem] = useState(1); // По умолчанию активен первый элемент
    const [formData, setForm] = useState({ projectId, stageId: lastClickedStage, title: "", description: "", dates: dateRange, priority: activeItem + 1 });

    const handleItemClick = (index) => {
        setActiveItem(index); // Устанавливаем активный элемент по индексу
    };

    const handleSubmit = () => {
        axios.post("http://localhost:3000/task/create", formData, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                client.invalidateQueries({ queryKey: ["stageTasks", lastClickedStage] });
                onOpenCreateTask();
            };
        });
    };

    return (
        <div className='popup'>
            <div className='popup__wrapper'>

                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Создание задачи
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenCreateTask}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input onChange={(e) => { setForm({ ...formData, title: e.target.value }) }} className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>
                </div>

                <div className="popup__name-inner popup__description">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Описание
                    </label>
                    <textarea onChange={(e) => { setForm({ ...formData, description: e.target.value }) }} className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...'></textarea>
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
                                onClick={() => { handleItemClick(index); setForm({ ...formData, priority: index + 1 }) }}
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
                            setForm({ ...formData, dates: update })
                        }}
                        isClearable={true}
                    />
                </div>

                <div className="popup__btns">
                    <button className="popup__btn popup__btn-add" onClick={handleSubmit}>
                        <p className="popup__btn-text">
                            Создать
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onOpenCreateTask}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>


            </div>
        </div>
    )

}

export default PopupCreateTask