import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './employees.scss';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Employees = ({ onEmployeePopup }) => {

    const positions = useLoaderData();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(positions[0]);

    const membersQuery = useQuery({
        queryKey: ["positionMembers", activeTab],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/user/position/members?position=${activeTab}`, { withCredentials: true });
            return data;
        }
    })

    return (
        <section className='employees'>
            <h2 className='account__title'>
                Сотрудники
            </h2>

            <div className="employees__content">
                <ul className="employees__tabs">
                    <h3 className="employees__tabs-title">
                        Должность
                    </h3>
                    {
                        positions.map((position) => (
                            <li
                                key={position}
                                className={`employees__tabs-item ${activeTab === position ? 'employees__tabs-item--active' : ''}`}
                                onClick={() => setActiveTab(position)}
                            >
                                <p className="employees__tabs-text">{position}</p>
                            </li>
                        ))
                    }
                </ul>

                <div className='employees__container'>
                    <h3 className='employees__items-title boards__items-title'>
                        {activeTab}
                    </h3>
                    <div className="employees__items">
                        {
                            !membersQuery.isLoading && membersQuery.data?.map((member) => (
                                <div onClickCapture={() => { navigate(`/employee/${member.id}`) }} className="boards__item" key={member.id} onClick={onEmployeePopup}>
                                    <div className="boards__item-wrapper">
                                        <img className="boards__item-img" src={member.avatarBase64} alt="Фото сотрудника" />
                                    </div>
                                    <h4 className="boards__item-title">{member.firstName} {member.lastName}</h4>
                                    <div className="boards__item-inner">
                                        <p className='boards__item-text'>Проекты:</p>
                                        <p className="boards__item-text">{member.projects}</p>
                                    </div>
                                    <div className="boards__item-inner">
                                        <p className='boards__item-text'>Задачи:</p>
                                        <p className="boards__item-text">{member.tasks}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employees;
