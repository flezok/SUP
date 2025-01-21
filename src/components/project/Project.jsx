import { useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
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
import Stage from './components/Stage';

const Project = ({ openAddMember, onOpenAddMember, onOpenConfirm, openConfirm, onOpenSettingsProject, openSettingsProject, confirmTitle, openProjectMembers, onOpenProjectMembers, onEmployeePopup }) => {
    const [createStage, setCreateStage] = useState(false);
    const [optionsStage, setOptionsStage] = useState(false);
    const [settingsStage, setSettingsStage] = useState(false);
    const [createTask, setCreateTask] = useState(false);
    const [settingsTask, setSettingsTask] = useState(false);
    const [lastClickedStage, setLastStage] = useState("");

    const navigate = useNavigate();
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

    const stagesQuery = useQuery({
        queryKey: ["projectStages", projectData.projectId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/project/${projectData.id}/stages`, { withCredentials: true });

            return data;
        }
    })

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
                    <button className="project__setting-btn" onClick={() => { navigate("settings"); }}>
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


                        {
                            !stagesQuery.isLoading && stagesQuery.data.map((stage) => (
                                <Stage projectId={projectData.id} key={stage.id} {...stage} onOpenOptionsStage={onOpenOptionsStage} onOpenSettingsStage={onOpenSettingsStage} onOpenCreateTask={onOpenCreateTask} setLastStage={setLastStage} stagesQuery={stagesQuery} />
                            ))
                        }
                        

                    </div>

                    <button className="project__btn" onClick={onOpenCreateStage}>
                        <p className='project__btn-text'>
                            Новый этап
                        </p>
                    </button>
                </div>
            </div>

            <Outlet />
            {/* {openAddMember && <PopupAddMemberProject availableUsers={availableUsers} users={users} setUsers={setUsers} onOpenAddMember={onOpenAddMember} />} */}
            {openAddMember && <PopupAddMemberProjectInner projectId={projectData.id} onOpenAddMember={onOpenAddMember} />}

            {openSettingsProject && <PopupSettingsProject onOpenConfirm={onOpenConfirm}
                openConfirm={openConfirm}
                onOpenSettingsProject={onOpenSettingsProject}
                confirmTitle={confirmTitle} />}
            {openProjectMembers && <PopupProjectMembers projectId={projectData.id} onOpenProjectMembers={onOpenProjectMembers} onEmployeePopup={onEmployeePopup} />}
            {createStage && <PopupAddStage projectId={projectData.id} onOpenCreateStage={onOpenCreateStage} stagesQuery={stagesQuery} />}
            {settingsStage && <PopupSettingsStage onOpenSettingsStage={onOpenSettingsStage} />}
            {createTask && <PopupCreateTask onOpenCreateTask={onOpenCreateTask} projectId={projectData.id} lastClickedStage={lastClickedStage} />}
            {settingsTask && <PopupSettingsTask onOpenSettingsTask={onOpenSettingsTask} onOpenAddMember={onOpenAddMember} openAddMember={openAddMember} />}




        </section>
    )

}

export default Project