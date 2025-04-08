import './report.scss'

import { useLoaderData } from 'react-router-dom'

const Report = ({ }) => {

    const reportData = useLoaderData();
    console.log(reportData);

    return (
        <section className='report'>
            <h2 className="report__title">
                Отчет за 25.01.2025
            </h2>

            <div className="report__container">
                <h3 className="report__container-title">
                    Проекты
                </h3>
                <div className="report__items">
                    <div className="report__item">
                        <p className='report__item-text'>
                            Всего проектов:
                        </p>
                        <p className="report__item-text">
                            {reportData.length}
                        </p>
                    </div>

                    <div className="report__item">
                        <p className='report__item-text'>
                            Активных проектов:
                        </p>
                        <p className="report__item-text">
                            {reportData.filter((project) => !project.completed).length}
                        </p>
                    </div>

                    <div className="report__item">
                        <p className='report__item-text'>
                            Завершенных проектов:
                        </p>
                        <p className="report__item-text">
                            {reportData.filter((project) => project.completed).length}
                        </p>
                    </div>
                </div>
            </div>

            <div className="report__container">
                <h3 className="report__container-title">
                    Задачи
                </h3>
                <div className="report__items">
                    <div className="report__item">
                        <p className='report__item-text'>
                            Всего задач:
                        </p>
                        <p className="report__item-text">
                            {reportData.reduce(
                                (acc, curr) => acc + curr.totalTasks,
                                0
                            )}
                        </p>
                    </div>

                    <div className="report__item">
                        <p className='report__item-text'>
                            Активных задач:
                        </p>
                        <p className="report__item-text">
                            {reportData.reduce(
                                (acc, curr) => acc + curr.notCompletedTasks,
                                0
                            )}
                        </p>
                    </div>

                    <div className="report__item">
                        <p className='report__item-text'>
                            Завершенных задач:
                        </p>
                        <p className="report__item-text">
                            {reportData.reduce(
                                (acc, curr) => acc + curr.completedTasks,
                                0
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <h3 className="report__container-title report__title-projects">
                Список проектов
            </h3>



            <div className="employee__projects">
                {
                    reportData.length > 0 && reportData.map((project) => (
                        <div key={project.id} className="employee__project">
                            <div className="employee__project-name">
                                <img className="employee__project-img" src={project.projectAvatar}></img>
                                <p className='employee__project-text'>{project.title}</p>
                            </div>

                            <p className="employee__project-post">Участников: {project.members}</p>

                            <div className="employee__project-task">
                                <p className="employee__project-task-text">{project.completedTasks}/{project.totalTasks}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


        </section>
    )

}

export default Report