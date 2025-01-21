import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import './popupSearch.scss'

const PopupSearch = ({ onSearchPopupClose, queryString }) => {

    const searchQuery = useQuery({
        queryKey: ["taskSearch", queryString],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/task/search?${new URLSearchParams({ query: queryString }).toString()}`, { withCredentials: true });
            return data;
        },
        enabled: queryString.length >= 1
    });

    return (
        <div className='popup__search'>
            <div className='popup__wrapper'>
                <div className="popup__header">
                    <h3 className="popup__header-title">
                        Результаты поиска
                    </h3>
                    <button className="popup__header-close" onClick={onSearchPopupClose}>

                    </button>
                </div>
                <div className="popup__items">
                    <div className="popup__items">
                        {
                            !searchQuery.isLoading && searchQuery.data?.map((task) => (
                                <div key={task.id} className="popup__item">
                                    <img className="popup__item-img" src={task.image}></img>
                                    <div className='popup__item-inner'>
                                        <p className="popup__item-task">
                                            {task.title}
                                        </p>
                                        <p className='popup__item-project'>
                                            {task.projectTitle}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PopupSearch