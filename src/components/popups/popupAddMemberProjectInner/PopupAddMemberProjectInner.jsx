import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import './popupAddMemberProjectInner.scss'

const PopupAddMemberProjectInner = ({ onOpenAddMember, projectId }) => {

    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        if (users.find(({ id }) => id === user.id)) {
            let fUsers = users.filter(({ id: uId }) => uId !== user.id);
            setUsers(fUsers);
        } else {
            setUsers((users) => [...users, user]);
        };
    };

    const availableUsers = useQuery({
        queryKey: ["projectAvailableUsers", projectId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/project/${projectId}/availableUsers`, { withCredentials: true });

            return data;
        }
    });

    const handleAddMembers = () => {
        axios.post(`http://localhost:3000/project/${projectId}/addMembers`, {
            members: users.map((u) => u.id)
        }, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                availableUsers.refetch();
                setUsers([]);
            };
        });
    };

    return (
        <div className="popup__members-add popup__members-add-inner">
            <div className='popup__add-wrapper'>
                <h3 className='popup__add-title'>
                    Сотрудники
                </h3>
                <button className="popup__add-close" onClick={onOpenAddMember}></button>
            </div>
            <input className="popup__add-input" type="text" placeholder='Поиск сотрудников'></input>
            <ul className="popup__add-items">
                {
                    !availableUsers.isLoading && availableUsers.data.map((addUser) => (
                        <li onClick={() => { handleAddUser(addUser) }} key={addUser.id} className="popup__add-item">
                            <div className="popup__add-item-wrapper">
                                <img className="popup__add-item-img" src={addUser.avatarBase64 ? addUser.avatarBase64 : '/images/defaultUser.png'}></img>
                                <p className="popup__add-item-name">
                                    {addUser.firstName} {addUser.lastName}
                                </p>
                            </div>
                            {users.find(({ id }) => id === addUser.id) && <div className="popup__add-item-check"></div>}
                        </li>
                    ))
                }
            </ul>

            <button onClick={handleAddMembers} className="popup__addMember-btn">
                <p className="popup__addMember-btn-text">
                    Добавить
                </p>
            </button>
        </div>
    )

}

export default PopupAddMemberProjectInner