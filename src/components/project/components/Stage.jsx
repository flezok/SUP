import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Task from "./Task";

export default function Stage({ onOpenOptionsStage, onOpenSettingsStage, onOpenCreateTask, title, color, projectId, id, setLastStage, stagesQuery }) {

    const [optionsStage, setOptionsStage] = useState(false);
    const [settingsStage, setSettingsStage] = useState(false);

    const handleDeleteStage = () => {
        axios.delete(`http://localhost:3000/project/${projectId}/stage/${id}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                stagesQuery.refetch();
            };
        });
    };

    const tasksQuery = useQuery({
        queryKey: ["stageTasks", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/project/${projectId}/stage/${id}/tasks`, { withCredentials: true });

            return data;
        }
    });

    return (
        <>
            <div className='project__tasks'>
                <div className="project__tasks-stage">
                    <div className='project__stage-wrapper'>
                        <div style={{ backgroundColor: color }} className='project__stage-color'></div>
                        <p className='project__stage-text'>
                            {title}
                        </p>
                    </div>
                    <button className='project__stage-btn' onClick={() => { setOptionsStage((prev) => !prev); }}></button>

                    {optionsStage && <ul className="project__stage-list">
                        <li className='project__stage-item' onClick={onOpenSettingsStage}>
                            <p className="project__stage-item-text">
                                Редактировать
                            </p>
                        </li>
                        <li onClick={handleDeleteStage} className='project__stage-item'>
                            <p className="project__stage-item-text">
                                Удалить
                            </p>
                        </li>
                    </ul>}
                </div>

                {
                    //TODO: map по задачам этапа
                    !tasksQuery.isLoading && tasksQuery.data.map((task) => (
                        <Task key={task.id} {...task} />
                    ))
                }

                <button className="project__tasks-btn" onClick={() => { onOpenCreateTask(); setLastStage(id); }}>
                    <p className='project__tasks-btn-text'>
                        Новая задача
                    </p>
                </button>
            </div>
        </>
    )
};