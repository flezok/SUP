import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';

import './popupEmployee.scss'

const PopupEmployee = ({ onEmployeePopup }) => {

    const navigate = useNavigate();
    const userData = useLoaderData();

    const projectsQuery = useQuery({
        queryKey: ["userProjects", userData.id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/user/${userData.id}/projects`, { withCredentials: true });
            console.log(data);
            return data;
        }
    })

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__employee'>
                <div className="popup__close-wrapper">
                    <button className='popup__close-btn employee__btn-close' onClick={() => { navigate(-1); }}></button>
                </div>
                <h3 className="employee__title">
                    {userData.position}
                </h3>

                <div className="employee__info-wrapper">
                    <div className='employee__info'>
                        <div className="employee__info-inner">
                            <img className='employee__info-img' src={userData.avatarBase64}></img>
                            <div className="employee__info-name">
                                <p className="employee__info-text">{userData.firstName}</p>
                                <p className="employee__info-text">{userData.lastName}</p>
                                <p className="employee__info-text">{userData.middleName}</p>
                            </div>
                        </div>

                        <div className="employee__info-contact">
                            <p className="employee__info-text">email: {userData.email}</p>
                            <p className="employee__info-text">тел: {userData.number}</p>
                        </div>
                    </div>
                </div>

                <div className="employee__projects">
                    {
                        !projectsQuery.isLoading && projectsQuery.data.map((project) => (
                            <div key={project.id} className="employee__project">
                                <div className="employee__project-name">
                                    <img className="employee__project-img" src={project.projectAvatar}></img>
                                    <p className='employee__project-text'>{project.title}</p>
                                </div>

                                <p className="employee__project-post">{userData.position}</p>

                                <div className="employee__project-task">
                                    <p className="employee__project-task-text">{project.completedTasks}/{project.projectTasks}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>

                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div>
                    <div className="employee__project">
                        <div className="employee__project-name">
                            <img className="employee__project-img" src="../../../../public/images/projectLast.jpg"></img>
                            <p className='employee__project-text'>Проект А</p>
                        </div>

                        <p className="employee__project-post">Senior-frontend разработчик</p>

                        <div className="employee__project-task">
                            <p className="employee__project-task-text">7/14</p>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )

}

export default PopupEmployee