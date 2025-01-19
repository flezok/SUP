import { useState } from 'react';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';

import './popupAddCheck.scss'

const PopupAddCheck = ({ onAddCheck, taskId }) => {
    const client = useQueryClient();

    const [subData, setData] = useState({ title: "" });

    const handleSubmit = () => {
        axios.post(`http://localhost:3000/task/${taskId}/sub`, subData, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                client.refetchQueries({ queryKey: ["task", taskId] });
                onAddCheck();
            };
        });
    };

    return (
        <div className='popup popup__confirm'>
            <div className='popup__wrapper popup__confirm-wrapper popup__addCheck'>
                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название подзадачи
                        </label>
                        <input onChange={(e) => { setData({ title: e.target.value }) }} className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>
                </div>

                <div className="popup__btns popup__confirm-btns">
                    <button onClick={handleSubmit} className="popup__btn popup__btn-add">
                        <p className="popup__btn-text">
                            Подтвердить
                        </p>
                    </button>
                    <button className="popup__btn popup__btn-cancel" onClick={onAddCheck}>
                        <p className="popup__btn-text">
                            Отменить
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )

}

export default PopupAddCheck