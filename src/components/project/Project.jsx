import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import PopupAddMemberProject from '../popups/popupAddMemberProject/PopupAddMemberProject';
import PopupSettingsProject from '../popups/popupSettingsProject/PopupSettingsProject';
import PopupProjectMembers from '../popups/popupProjectMembers/PopupProjectMembers';
import PopupAddStage from '../popups/popupAddStage/PopupAddStage';
import PopupSettingsStage from '../popups/popupSettingsStage/PopupSettingsStage';
import PopupCreateTask from '../popups/popupCreateTask/PopupCreateTask';
import PopupSettingsTask from '../popups/popupSettingsTask/PopupSettingsTask';
import PopupAddMemberProjectInner from '../popups/popupAddMemberProjectInner/PopupAddMemberProjectInner';

import './project.scss'

const Project = ({ openAddMember, onOpenAddMember, onOpenConfirm, openConfirm, onOpenSettingsProject, openSettingsProject, confirmTitle, openProjectMembers, onOpenProjectMembers, onEmployeePopup }) => {
    const [createStage, setCreateStage] = useState(false);
    const [optionsStage, setOptionsStage] = useState(false);
    const [settingsStage, setSettingsStage] = useState(false);
    const [createTask, setCreateTask] = useState(false);
    const [settingsTask, setSettingsTask] = useState(false);

    const projectData = useLoaderData();

    const onOpenCreateStage = () => {
        setCreateStage(!createStage)
    }

    const onOpenOptionsStage = () => {
        setOptionsStage(!optionsStage)
    }

    const onOpenSettingsStage = () => {
        setSettingsStage(!settingsStage)
    }

    const onOpenCreateTask = () => {
        setCreateTask(!createTask)
    }

    const onOpenSettingsTask = () => {
        setSettingsTask(!settingsTask)
    }

    return (
        <section className='project'>
            <h2 className='account__title'>
                Доска проекта
            </h2>



            <div className='project__header'>
                <div className="project__name project__header-item">
                    <p className="project__name-text">
                        {projectData.title}
                    </p>
                </div>

                <div className="project__team project__header-item">
                    <div className="project__team-images">
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img" src="../../../public/images/avatar1.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img" src="../../../public/images/avatar2.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img" src="../../../public/images/avatar3.png">

                            </img>
                        </div>
                    </div>

                    <button className='project__team-btn' onClick={onOpenAddMember}>
                        <p className='project__team-btn-text'>
                            Добавить участника
                        </p>
                    </button>
                </div>

                <div className="project__setting project__header-item">
                    <button className="project__setting-btn" onClick={onOpenSettingsProject}>
                        <p className="project__setting-text">
                            Настройки
                        </p>
                    </button>
                </div>

                <div className="project__date">
                    <div className="project__date-created project__date-container">
                        <p className='project__date-action'>
                            Создан:
                        </p>
                        <p className='project__date-text'>
                            {DateTime.fromISO(projectData.dates[0]).setLocale("ru").toFormat("dd LLL yyyy")}
                        </p>
                    </div>
                    <div className="project__date-deadline project__date-container">
                        <p className='project__date-action'>
                            Срок:
                        </p>
                        <p className='project__date-text'>
                            {DateTime.fromISO(projectData.dates[1]).setLocale("ru").toFormat("dd LLL yyyy")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="project__tools">
                <div className="project__inner">
                    <div className="project__tools-search">
                        <input className="project__tools-input" type="text" placeholder='Поиск задачи'></input>
                    </div>

                    {/* <div className="project__tools-sort"> */}
                    {/* <button className="project__sort-btn">
                            <p className="project__sort-btn-text">
                                Стандартная
                            </p>
                        </button> */}
                    {/* <ul class="dropdown__menu">
                            <li class="dropdown__item"><a href="#">Пункт 1</a></li>
                            <li class="dropdown__item"><a href="#">Пункт 2</a></li>
                            <li class="dropdown__item"><a href="#">Пункт 3</a></li>
                        </ul> */}
                    {/* </div> */}
                </div>
                <button className='project__member' onClick={onOpenProjectMembers}>
                    <p className='project__member-text'>
                        Сотрудники
                    </p>
                </button>
            </div>

            <div className="project__container">
                <div className="project__container-wrapper">
                    <div className="project__tasks-wrapper">

                        <div className='project__tasks'>
                            <div className="project__tasks-stage">
                                <div className='project__stage-wrapper'>
                                    <div className='project__stage-color'></div>
                                    <p className='project__stage-text'>
                                        В ожидании
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

                            <div className="project__task" onClick={onOpenSettingsTask}>
                                <img className="project__task-img" src="../../../public/images/task.png"></img>
                                <div className="project__task-deadline">
                                    <p className="project__task-deadline-text">
                                        06 фев 2025
                                    </p>
                                </div>
                                <h3 className='project__task-title'>
                                    Название крутой задачи
                                </h3>
                                <p className="project__task-text">
                                    Эта крутая задача с очень длинным описанием тут я что-то написал про эту задачу она реально суперская
                                </p>
                                <div className="project__task-progress">
                                    <p className="project__task-progress-text">
                                        Прогресс:
                                    </p>
                                    <p className="project__task-progress-count">
                                        0/6
                                    </p>
                                </div>
                                <div className='project__task-footer'>
                                    <div className="task__footer-stats">
                                        <div className="task__footer-stat task__footer-view">
                                            <p className="task__footer-count">
                                                4
                                            </p>
                                        </div>
                                        <div className="task__footer-stat task__footer-comment">
                                            <p className="task__footer-count">
                                                15
                                            </p>
                                        </div>
                                    </div>

                                    <div className='task__footer-images'>
                                        <div className="project__team-images">
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar1.png">

                                                </img>
                                            </div>
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar2.png">

                                                </img>
                                            </div>
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar3.png">

                                                </img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project__task">
                                <img className="project__task-img" src="../../../public/images/task.png"></img>
                                <div className="project__task-deadline">
                                    <p className="project__task-deadline-text">
                                        06 фев 2025
                                    </p>
                                </div>
                                <h3 className='project__task-title'>
                                    Название крутой задачи
                                </h3>
                                <p className="project__task-text">
                                    Эта крутая задача с очень длинным описанием тут я что-то написал про эту задачу она реально суперская
                                </p>
                                <div className="project__task-progress">
                                    <p className="project__task-progress-text">
                                        Прогресс:
                                    </p>
                                    <p className="project__task-progress-count">
                                        0/6
                                    </p>
                                </div>
                                <div className='project__task-footer'>
                                    <div className="task__footer-stats">
                                        <div className="task__footer-stat task__footer-view">
                                            <p className="task__footer-count">
                                                4
                                            </p>
                                        </div>
                                        <div className="task__footer-stat task__footer-comment">
                                            <p className="task__footer-count">
                                                15
                                            </p>
                                        </div>
                                    </div>

                                    <div className='task__footer-images'>
                                        <div className="project__team-images">
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar1.png">

                                                </img>
                                            </div>
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar2.png">

                                                </img>
                                            </div>
                                            <div className="project__team-wrapper-img">
                                                <img className="project__team-img" src="../../../public/images/avatar3.png">

                                                </img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="project__tasks-btn" onClick={onOpenCreateTask}>
                                <p className='project__tasks-btn-text'>
                                    Новая задача
                                </p>
                            </button>
                        </div>





                    </div>

                    <button className="project__btn" onClick={onOpenCreateStage}>
                        <p className='project__btn-text'>
                            Новый этап
                        </p>
                    </button>
                </div>
            </div>

            {/* {openAddMember && <PopupAddMemberProject availableUsers={availableUsers} users={users} setUsers={setUsers} onOpenAddMember={onOpenAddMember} />} */}
            {openAddMember && <PopupAddMemberProjectInner projectId={projectData.id} onOpenAddMember={onOpenAddMember} />}

            {openSettingsProject && <PopupSettingsProject onOpenConfirm={onOpenConfirm}
                openConfirm={openConfirm}
                onOpenSettingsProject={onOpenSettingsProject}
                confirmTitle={confirmTitle} />}
            {openProjectMembers && <PopupProjectMembers projectId={projectData.id} onOpenProjectMembers={onOpenProjectMembers} onEmployeePopup={onEmployeePopup} />}
            {createStage && <PopupAddStage onOpenCreateStage={onOpenCreateStage} />}
            {settingsStage && <PopupSettingsStage onOpenSettingsStage={onOpenSettingsStage} />}
            {createTask && <PopupCreateTask onOpenCreateTask={onOpenCreateTask} />}
            {settingsTask && <PopupSettingsTask onOpenSettingsTask={onOpenSettingsTask} onOpenAddMember={onOpenAddMember} openAddMember={openAddMember} />}




        </section>
    )

}

export default Project