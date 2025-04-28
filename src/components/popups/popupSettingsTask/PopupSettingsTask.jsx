import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import PopupAddCheck from './popupAddCheck/PopupAddCheck';
import Comment from './components/Comment';
// import PopupAddMemberProject from '../popupAddMemberProject/PopupAddMemberProject';
import PopupAddMemberTask from './popupAddMemberTask/PopupAddMemberTask';

import './popupSettingsTask.scss'
import axios from 'axios';

const PopupSettingsTask = ({ onOpenSettingsTask, onOpenAddMember, openAddMember }) => {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const [openAddMemberTask, setOpenAddMemberTask] = useState(false)

    const taskQuery = useQuery({
        queryKey: ["task", taskId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/task/${taskId}`, { withCredentials: true });

            return data;
        }
    });

    const commentsQuery = useQuery({
        queryKey: ["comments", taskId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/task/${taskId}/comments`, { withCredentials: true });
            return data;
        }
    });

    const onOpenAddMemberTask = () => {
        setOpenAddMemberTask(!openAddMemberTask)
    }

    const handleChange = (property, val) => {
        axios.post(`http://localhost:3000/task/${taskId}/update/${property}`, {
            value: val
        }, { withCredentials: true }).then((res) => {
            if (res.data.success && property === "priority") {
                taskQuery.refetch();
            };
        })
    };

    const handleTaskComplete = (status) => {
        axios.get(`http://localhost:3000/task/${taskId}/complete?status=${status}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    const handleTaskDelete = () => {
        axios.delete(`http://localhost:3000/task/${taskId}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [activeItem, setActiveItem] = useState(taskQuery.data?.priority - 1); // По умолчанию активен первый элемент
    const [check, setCheck] = useState(false);
    const [addCheck, setAddCheck] = useState(false);
    const [commentText, setComment] = useState("");

    const handleItemClick = (index) => {
        setActiveItem(index); // Устанавливаем активный элемент по индексу
    };

    const onCreateCheck = () => {
        setCheck(!check)
    }

    const onAddCheck = () => {
        setAddCheck(!addCheck)
    }

    

    const handleCommentSubmit = () => {
        axios.post(`http://localhost:3000/task/${taskId}/comment`, {
            date: new Date(),
            text: commentText,
        }, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                setComment("");
                commentsQuery.refetch();
            };
        });
    };

    const handleCreateSub = () => {
        axios.post(`http://localhost:3000/task/${taskId}/createSub`, {}, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    const handleDeleteSub = () => {
        axios.delete(`http://localhost:3000/task/${taskId}/subTasks`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    const handleCompleteChange = (id, currentState) => {
        axios.get(`http://localhost:3000/task/${taskId}/sub/${id}/complete?state=${currentState}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    const handleDeleteSubTask = (id) => {
        axios.delete(`http://localhost:3000/task/${taskId}/sub/${id}`, { withCredentials: true }).then((res) => {
            if (res.data.success) {
                taskQuery.refetch();
            };
        });
    };

    

    useEffect(() => {
        if (!taskQuery.isLoading) {
            setActiveItem(taskQuery.data?.priority - 1);
        };
    }, [taskQuery]);

    return (
        <div className='popup'>
            <div className='popup__wrapper popup__task'>
                <div className="popup__close-wrapper">

                    <button className='popup__close-btn' onClick={() => { navigate(-1); }}>

                    </button>
                </div>

                <div className="popup__name-container">
                    <div className="popup__name-inner">
                        <label className="popup__name-title" htmlFor='projectName'>
                            Название
                        </label>
                        <input onBlur={(e) => { handleChange("title", e.target.value); }} defaultValue={taskQuery.data?.title} className="popup__name-input" id="projectName" type='text' placeholder='Напишите название...'></input>
                    </div>
                </div>

                <div className="popup__name-inner popup__description">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Описание
                    </label>
                    <textarea onBlur={(e) => { handleChange("description", e.target.value); }} defaultValue={taskQuery.data?.description} className="popup__name-input popup__description-input" id="projectDescription" type='text' placeholder='Напишите описание...'></textarea>
                </div>

                <div className="popup__members">
                    <button className="popup__members-btn" onClick={onOpenAddMemberTask}>
                        <p className="popup__members-text">
                            Добавить участников
                        </p>
                    </button>



                    <div className="project__team-images popup__members-images">
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar1.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar2.png">

                            </img>
                        </div>
                        <div className="project__team-wrapper-img popup__members-inner">
                            <img className="project__team-img popup__members-img" src="../../../public/images/avatar3.png">

                            </img>
                        </div>
                    </div>
                </div>

                <div className="popup__members">
                    <button className="popup__members-btn popup__btn-priority">
                        <p className="popup__members-text">
                            Приоритет задачи
                        </p>
                    </button>

                    <div className="popup__priority-items">
                        {[1, 2, 3, 4, 5].map((priority, index) => (
                            <div
                                key={index}
                                className={`popup__priority-item ${activeItem === index ? 'popup__priority-item--active' : ''}`}
                                onClick={() => { handleItemClick(index); handleChange("priority", index + 1); }}
                            >
                                <p className="popup__priority-item-text">{priority}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='popup__deadline'>
                    <label className="popup__deadline-btn popup__members-btn" htmlFor="date">
                        <p className="popup__deadline-text popup__members-text">
                            Выбрать даты
                        </p>
                    </label>
                    <DatePicker
                        id="date"
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                            handleChange("dates", update);
                        }}
                        isClearable={true}
                    />
                </div>

                <div className="popup__settingsProject-btn popup__settingsTask-btn">
                    <button onClick={() => { handleTaskComplete(taskQuery.data?.completed); }} className="popup__members-btn settingsProject__btn-finish">
                        <p className="popup__members-text">
                            Завершить задачу
                        </p>
                    </button>
                </div>

                <div className="popup__settingsProject-btn">
                    <button className="popup__members-btn settingsProject__btn-delete" onClick={handleTaskDelete}>
                        <p className="popup__members-text">
                            Удалить задачу
                        </p>
                    </button>
                </div>

                {!taskQuery.isLoading && taskQuery.data.subTasks ? (
                    <div className="popup__check">
                        <div className="popup__check-header">
                            <div className="popup__members-btn popup__check-header-inner">
                                <p className="popup__check-text">Чек-лист</p>
                            </div>

                            <button className="popup__check-btn" onClick={handleDeleteSub}>
                                <p className="popup__check-btn-text">
                                    Удалить
                                </p>
                            </button>
                        </div>

                        <ul className="popup__check-list">
                            {/* <li className="popup__check-item">
                                <input className="popup__check-item-input" type='checkbox' id="check_input1"></input>
                                <label className="popup__check-item-text" htmlFor='check_input1'>Стейт выделенных пользователей</label>
                                <button className="check__item-delete">x</button>
                            </li>

                            <li className="popup__check-item">
                                <input className="popup__check-item-input" type='checkbox' id="check_input2"></input>
                                <label className="popup__check-item-text" htmlFor='check_input2'>Стейт lflflfl</label>
                                <button className="check__item-delete">x</button>
                            </li> */}
                            {
                                !taskQuery.isLoading && taskQuery.data.subTasks.map((subTask) => (
                                    <li key={subTask.id} className="popup__check-item">
                                        <input onChange={() => { handleCompleteChange(subTask.id, subTask.completed); }} defaultChecked={subTask.completed} value={subTask.completed} className="popup__check-item-input" type='checkbox' id="check_input2"></input>
                                        <label className="popup__check-item-text" htmlFor='check_input2'>{subTask.title}</label>
                                        <button onClick={() => { handleDeleteSubTask(subTask.id); }} className="check__item-delete">x</button>
                                    </li>
                                ))
                            }


                        </ul>

                        <button className="check__create-btn popup__check-btn" onClick={onAddCheck}>
                            <p className="check__create-btn-text popup__check-btn-text">
                                Добавить элемент
                            </p>
                        </button>
                    </div>
                ) : (
                    <div className="popup__members">
                        <button className="popup__members-btn popup__btn-check" onClick={handleCreateSub}>
                            <p className="popup__members-text">
                                Создать чек-лист
                            </p>
                        </button>
                    </div>
                )}





                <div className="popup__comments">
                    <label className="popup__name-title popup__description-title" htmlFor='projectDescription'>
                        Комментарии
                    </label>
                    <textarea onChange={(e) => { setComment(e.target.value); }} value={commentText} className="popup__name-input popup__description-input popup__comments-input" id="projectDescription" type='text' placeholder='Напишите комментарий...'></textarea>
                    <div className="popup__btns popup__confirm-btns popup__comments-btns">
                        <button onClick={handleCommentSubmit} className="popup__btn popup__btn-add">
                            <p className="popup__btn-text">
                                Отправить
                            </p>
                        </button>
                        <button className="popup__btn popup__btn-cancel">
                            <p className="popup__btn-text">
                                Отменить
                            </p>
                        </button>
                    </div>
                </div>

                <div className="popup__comments-list">
                    {
                        !commentsQuery.isLoading && commentsQuery.data.map((comment) => (
                            <Comment key={comment.id} {...comment} />
                        ))
                    }
                    {/* <div className="popup__list-item">
                        <img className="popup__list-img" src="../../../../public/images/avatarHeader.png"></img>
                        <div className="popup__list-inner">
                            <p className="popup__list-name">
                                Дмитрий Травин
                            </p>
                            <p className="popup__list-text">
                                Тут текст моего супер крутого комментария о том как хотелось бы уже сделать этот диплом и получить хотя бы 3 да и всю сессию закрыть дааааа вот это было бы словано оуу дааа девочку на виранде оууу йееес
                            </p>
                        </div>
                        <button className="popup__list-delete">

                        </button>
                    </div>

                    <div className="popup__list-item">
                        <img className="popup__list-img" src="../../../../public/images/avatarHeader.png"></img>
                        <div className="popup__list-inner">
                            <p className="popup__list-name">
                                Дмитрий Травин
                            </p>
                            <p className="popup__list-text">
                                Тут текст моего супер крутого комментария о том как хотелось бы уже сделать этот диплом и получить хотя бы 3 да и всю сессию закрыть дааааа вот это было бы словано оуу дааа девочку на виранде оууу йееес
                            </p>
                        </div>
                        <button className="popup__list-delete">

                        </button>
                    </div>

                    <div className="popup__list-item">
                        <img className="popup__list-img" src="../../../../public/images/avatarHeader.png"></img>
                        <div className="popup__list-inner">
                            <p className="popup__list-name">
                                Дмитрий Травин
                            </p>
                            <p className="popup__list-text">
                                Тут текст моего супер крутого комментария о том как хотелось бы уже сделать этот диплом и получить хотя бы 3 да и всю сессию закрыть дааааа вот это было бы словано оуу дааа девочку на виранде оууу йееес
                            </p>
                        </div>
                        <button className="popup__list-delete">

                        </button>
                    </div> */}
                </div>

                {addCheck && <PopupAddCheck taskId={taskId} onAddCheck={onAddCheck} />}
                {openAddMemberTask && <PopupAddMemberTask taskMembers={taskQuery.data?.assignedTo} onOpenAddMemberTask={onOpenAddMemberTask} />}
            </div>
        </div>
    )

}

export default PopupSettingsTask