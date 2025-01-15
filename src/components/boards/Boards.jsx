import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './boards.scss'

const Boards = ({}) => {

    const [isFollowed, setIsFollowed] = useState(false); // Состояние кнопки
    const navigate = useNavigate();
    
    const handleBoardClick = () => {
        navigate('/project');
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
                        <div className="boards__item" onClick={handleBoardClick}>
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                                <button className={`boards__item-btn ${isFollowed ? "boards__item-btn--follow" : ""}`}
                                        onClick={handleButtonClick}>
                                </button>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Мой проджект
                            </h4>
                            <p className='boards__item-text'>
                                Вау какой крутой у меня супер проджект всем проджектам проджект
                            </p>
                        </div>

                    </div>
                </div>

                <div className='boards__inner boards__recently'>
                    <h3 className='boards__items-title'>
                        Последние доски
                    </h3>
                    <div className="boards__items">
                        <div className="boards__item" onClick={handleBoardClick}>
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                                <button className={`boards__item-btn ${isFollowed ? "boards__item-btn--follow" : ""}`}
                                        onClick={handleButtonClick}>
                                </button>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Мой проджект
                            </h4>
                            <p className='boards__item-text'>
                                Вау какой крутой у меня супер проджект всем проджектам проджект
                            </p>
                        </div>
                    </div>
                </div>

                <div className='boards__inner boards__all'>
                    <h3 className='boards__items-title'>
                        Все доски
                    </h3>
                    <div className="boards__items">
                        <div className="boards__item" onClick={handleBoardClick}>
                            <div className="boards__item-wrapper">
                                <img className="boards__item-img" src="../../../public/images/projectLast.jpg"></img>
                                <button className={`boards__item-btn ${isFollowed ? "boards__item-btn--follow" : ""}`}
                                        onClick={handleButtonClick}>
                                </button>
                            </div>
                            
                            <h4 className="boards__item-title">
                                Мой проджект
                            </h4>
                            <p className='boards__item-text'>
                                Вау какой крутой у меня супер проджект всем проджектам проджект
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Boards