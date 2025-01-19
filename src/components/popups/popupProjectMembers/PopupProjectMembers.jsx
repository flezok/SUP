import { } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouteLoaderData, useNavigate } from 'react-router-dom';

import './popupProjectMembers.scss'

const PopupProjectMembers = ({ onOpenProjectMembers, onEmployeePopup, projectId }) => {
    const { id: userId } = useRouteLoaderData("root");
    const navigate = useNavigate();

    const membersQuery = useQuery({
        queryKey: ["projectMembers", projectId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/project/${projectId}/members`, { withCredentials: true });

            return data;
        }
    });

    const handleMemberRemove = (id) => {
        axios.delete(`http://localhost:3000/project/${projectId}/members/${id}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                membersQuery.refetch();
            };
        });
    };

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__project-members'>

                <div className="popup__close-wrapper">
                    <h3 className="popup__title">
                        Участники проекта
                    </h3>
                    <button className='popup__close-btn' onClick={onOpenProjectMembers}>

                    </button>
                </div>

                <ul className="popup__add-items popup__items-members">
                    {
                        !membersQuery.isLoading && membersQuery.data.map((member) => (
                            <li onClick={() => { navigate(`/employee/${member.id}`) }} key={member.id} className="popup__add-item" >
                                <div className='popup__add-item-container' onClick={onEmployeePopup}>
                                    <div className="popup__add-item-wrapper">
                                        <img className="popup__add-item-img" src={member.avatarBase64}></img>
                                        <p className="popup__add-item-name">
                                            {member.firstName} {member.lastName}
                                        </p>
                                    </div>
                                    <div className="popup__add-item-wrapper">
                                        <p className="popup__add-item-name popup__members-pos">
                                            {member.position}
                                        </p>
                                    </div>
                                </div>
                                {userId !== member.id && <button onClick={() => { handleMemberRemove(member.id); }} className='popup__item-member-delete'>
                                    <p className="popup__item-member-delete-text">
                                        Удалить
                                    </p>
                                </button>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

}

export default PopupProjectMembers