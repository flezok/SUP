import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import '../../popupAddMemberProject/popupAddMemberProject.scss'
import axios from 'axios';

const PopupAddMemberTask = ({ onOpenAddMemberTask, taskMembers }) => {
    const { taskId, projectId } = useParams();
    const client = useQueryClient();

    const availableUsers = useQuery({
        queryKey: ["taskUsers", projectId, taskId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/project/${projectId}/taskAvailableUsers`, { withCredentials: true });
            return data;
        }
    });

    const handleAddUser = (id) => {
        axios.post(`http://localhost:3000/task/${taskId}/assign`, {
            memberId: id
        }, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                client.invalidateQueries({ queryKey: ["task", taskId] });
            };
        })
    };

    // const handleAddUser = (user) => {
    //     if (users.find(({ id }) => id === user.id)) {
    //         users = users.filter(({ id: uId }) => uId !== user.id);
    //         setUsers(users);
    //     } else {
    //         setUsers((users) => [...users, user]);
    //     };
    // };

    return (
        <div className="popup__members-add">
            <div className='popup__add-wrapper'>
                <h3 className='popup__add-title'>
                    Сотрудники
                </h3>
                <button className="popup__add-close" onClick={onOpenAddMemberTask}></button>
            </div>
            <input className="popup__add-input" type="text" placeholder='Поиск сотрудников'></input>
            <ul className="popup__add-items">
                {
                    !availableUsers.isLoading && availableUsers.data.map((addUser) => (
                        <li onClick={() => { handleAddUser(addUser.id) }} key={addUser.id} className="popup__add-item">
                            <div className="popup__add-item-wrapper">
                                <img className="popup__add-item-img" src={addUser.avatarBase64 ? addUser.avatarBase64 : '/images/defaultUser.png'}></img>
                                <p className="popup__add-item-name">
                                    {addUser.firstName} {addUser.lastName}
                                </p>
                            </div>
                            {taskMembers.find((id) => id === addUser.id) && <div className="popup__add-item-check"></div>}
                        </li>
                    ))
                }
                {/* <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>
                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>

                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li>
                
                <li className="popup__add-item">
                    <div className="popup__add-item-wrapper">
                        <img className="popup__add-item-img" src='../../../../public/images/avatarHeader.png'></img>
                        <p className="popup__add-item-name">
                            Дмитрий Травин
                        </p>
                    </div>
                    <div className="popup__add-item-check"></div>
                </li> */}
            </ul>
        </div>
    )

}

export default PopupAddMemberTask