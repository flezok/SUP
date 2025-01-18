import { useState } from "react";
export default function Stage({ onOpenOptionsStage, onOpenSettingsStage, onOpenCreateTask, title, color, projectId }) {

    const [optionsStage, setOptionsStage] = useState(false);
    const [settingsStage, setSettingsStage] = useState(false);

    return (
        <div className='project__tasks'>
            <div className="project__tasks-stage">
                <div className='project__stage-wrapper'>
                    <div style={{ backgroundColor: color }} className='project__stage-color'></div>
                    <p className='project__stage-text'>
                        {title}
                    </p>
                </div>
                <button className='project__stage-btn' onClick={onOpenOptionsStage}></button>

                {optionsStage && <ul className="project__stage-list">
                    <li className='project__stage-item' onClick={onOpenSettingsStage}>
                        <p className="project__stage-item-text">
                            Редактировать
                        </p>
                    </li>
                    <li className='project__stage-item'>
                        <p className="project__stage-item-text">
                            Удалить
                        </p>
                    </li>
                </ul>}
            </div>

            {
                //TODO: map по задачам этапа
            }

            <button className="project__tasks-btn" onClick={onOpenCreateTask}>
                <p className='project__tasks-btn-text'>
                    Новая задача
                </p>
            </button>
        </div>
    )
};