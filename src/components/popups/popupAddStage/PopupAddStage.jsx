import { useState } from 'react';
import { RgbaStringColorPicker } from "react-colorful";
import axios from 'axios';
import DatePicker from "react-datepicker";


import './popupAddStage.scss'

const PopupAddStage = ({ onOpenCreateStage, projectId, stagesQuery }) => {

    const [colorStage, setColorStage] = useState("rgba(255, 255, 255, 1)");
    const [pickColor, setPickColor] = useState(false);
    const [title, setTitle] = useState("Этап");
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const onChangeColor = (newColor) => {
        setColorStage(newColor);
    }

    const onOpenPickColor = () => {
        setPickColor(!pickColor);
    }

    const handleSubmit = () => {
        axios.post(`http://localhost:3000/project/${projectId}/stage`, {
            title: title,
            color: colorStage,
            projectId
        }, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                stagesQuery.refetch();
                onOpenCreateStage();
            };
        });
    };
    

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__add-stage'>
                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Создание этапа
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenCreateStage}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название этапа
                        </label>
                        <input onChange={(e) => { setTitle(e.target.value); }} className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>


                    <div className='popup__collor-container'>
                        <div className='popup__color' style={{ backgroundColor: colorStage }} onClick={onOpenPickColor}></div>
                        {pickColor && <div className="popup__color-wrapper">
                            <RgbaStringColorPicker onChange={(newColor) => onChangeColor(newColor)} />
                        </div>}
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
                    <button onClick={handleSubmit} className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Создать
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onOpenCreateStage}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default PopupAddStage;