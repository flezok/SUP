import { DateTime } from "luxon"
import { useNavigate } from "react-router-dom"

export default function Task({ title, description, dates, id, subTasks }) {

    const navigate = useNavigate();

    return (
        <div onClick={() => { navigate(`task/${id}`); }} className="project__task">
            <img className="project__task-img" src="../../../public/images/task.png"></img>
            <div className="project__task-deadline">
                <p className="project__task-deadline-text">
                    {DateTime.fromISO(dates[1]).setLocale("ru").toFormat("dd LLL yyyy")}
                </p>
            </div>
            <h3 className='project__task-title'>
                {title}
            </h3>
            <p className="project__task-text">
                {description}
            </p>
            <div className="project__task-progress">
                <p className="project__task-progress-text">
                    Прогресс:
                </p>
                <p className="project__task-progress-count">
                    {subTasks && `${subTasks.filter((sub) => sub.completed).length}/${subTasks.length}`}
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
    )
};