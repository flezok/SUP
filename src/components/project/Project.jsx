import { useState } from 'react';

import './project.scss'

const Project = () => {

    return (
        <section className='project'>
            <h2 className='account__title'>
                Доска проекта
            </h2>

            <div className='project__header'>
                <div className="project__name">
                    <p className="project__name-text">
                        Разработка приложения
                    </p>
                </div>

                <div className="project__team">
                    <div className="project__team-images">
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img">
                            <img className="project__team-img">

                            </img>
                        </div>
                    </div>

                    <button className='project__team-btn'>
                        <p className='project__team-btn-text'>

                        </p>
                    </button>
                </div>
                
                <div className="project__setting">
                    <button className="project__setting">
                        <p className="project__setting-text">
                            
                        </p>
                    </button>
                </div>

                <div className="project__date">
                    <div className="project__date-created">
                        <p className='project__date-action'>

                        </p>
                        <p className='project__date-text'>
                            янв 04, 2025
                        </p>
                    </div>
                    <div className="project__date-deadline">
                        <p className='project__date-action'>

                        </p>
                        <p className='project__date-text'>
                            сен 25, 2025
                        </p>
                    </div>
                </div>
            </div>

            <div className="project__tools">
                <div className="project__inner">
                    <div className="project__tools-search">
                        <input className="project__tools-input" type="text"></input>
                    </div>
                    <div className="project__tools-sort">
                        <button className="project__sort-btn">
                            <p className="project__sort-btn-text">

                            </p>
                        </button>
                        {/* <ul class="dropdown__menu">
                            <li class="dropdown__item"><a href="#">Пункт 1</a></li>
                            <li class="dropdown__item"><a href="#">Пункт 2</a></li>
                            <li class="dropdown__item"><a href="#">Пункт 3</a></li>
                        </ul> */}
                    </div>
                </div>
                <button className='project__member'>
                    <p className='project__member-text'>
                        Сотрудники
                    </p>
                </button>
            </div>

            <div className="project__container">
                <div className='project__tasks'>
                    <div className="project__task-stage">
                        <p className='project__stage-text'>

                        </p>
                    </div>

                    <div className="project__task">
                        <img className="project__task-img"></img>
                        <div className="project__task-deadline">
                            <p className="project_-task-deadlint-text">

                            </p>
                        </div>
                        <h3 className='project__task-title'>

                        </h3>
                        <p className="project__task-text">

                        </p>
                        <div className="project__task-progress">
                            <p className="project__task-progress-text">

                            </p>
                            <p className="project__task-progress-count">
                                
                            </p>
                        </div>
                        <div className='project__task-footer'>
                            <div className="task__footer-stats">
                                <div className="task__footer-stat">
                                    <p className="task__footer-count">

                                    </p>
                                </div>
                                <div className="task__footer-stat">
                                    <p className="task__footer-count">
                                        
                                    </p>
                                </div>
                            </div>

                            <div className='task__footer-images'>
                                <div className='task__footer-img-wrapper'>
                                    <img className="task__footer-img"></img>
                                </div>
                                <div className='task__footer-img-wrapper'>
                                    <img className="task__footer-img"></img>
                                </div>
                                <div className='task__footer-img-wrapper'>
                                    <img className="task__footer-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="project__tasks-btn">
                        <p className='project__tasks-btn-text'>
                            Новая задача
                        </p>
                    </button>
                </div>

                <button className="project__btn">
                    <p className='project__btn-text'>
                        Новый этап
                    </p>
                </button>
            </div>
        </section>
    )

}

export default Project