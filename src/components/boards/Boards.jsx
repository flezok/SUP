import { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ProjectBoard from './components/ProjectBoard';

import './boards.scss'

const Boards = ({ }) => {

    // const initialProjects = useLoaderData();
    const allProjects = useQuery({
        queryKey: ["projectType", "all"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/project/all?projectType=all", { withCredentials: true });
            return data;
        }
    });

    const lastVisitedProjects = useQuery({
        queryKey: ["projectType", "lastVisited"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/project/all?projectType=lastVisited", { withCredentials: true });
            return data;
        }
    });

    const favoriteProjects = useQuery({
        queryKey: ["projectType", "favorite"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/project/all?projectType=favorite", { withCredentials: true });
            return data;
        }
    });

    const [isFollowed, setIsFollowed] = useState(false); // Состояние кнопки
    const navigate = useNavigate();

    const handleBoardClick = (id) => {
        navigate(`/project/${id}`);
    };


    const handleButtonClick = () => {
        setIsFollowed((prevState) => !prevState); // Переключаем состояние
    };

    return (
        <section className='boards'>
            <h2 className='account__title'>
                Доска проектов
            </h2>

            <div className="boards__wrapper">
                <div className='boards__inner boards__follow'>
                    <h3 className='boards__items-title'>
                        Избранные доски
                    </h3>
                    <div className="boards__items">
                        {
                            !favoriteProjects.isLoading && favoriteProjects.data.map((project) => (
                                <ProjectBoard key={project.id} {...project} />
                            ))
                        }

                    </div>


                </div>

                <div className='boards__inner boards__recently'>
                    <h3 className='boards__items-title'>
                        Последние доски
                    </h3>

                    <div className="boards__items">
                        {
                            !lastVisitedProjects.isLoading && lastVisitedProjects.data.map((project) => (
                                <ProjectBoard key={project.id} {...project} />
                            ))
                        }
                    </div>
                </div>

                <div className='boards__inner boards__all'>
                    <h3 className='boards__items-title'>
                        Все доски
                    </h3>
                    <div className="boards__items">
                        {
                            !allProjects.isLoading && allProjects.data.map((project) => (
                                <ProjectBoard key={project.id} {...project} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Boards