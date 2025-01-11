import { useState } from 'react';
import './employees.scss';

const Employees = ({onEmployeePopup}) => {
    const [activeTab, setActiveTab] = useState('Project manager');

    const employeesData = {
        'Project manager': [
            {
                name: 'Травин Дмитрий',
                projects: 5,
                tasks: 52
            },
            {
                name: 'Бурдина Алёна',
                projects: 52,
                tasks: 522
            }
        ],
        'Senior-dev': [
            {
                name: 'Иванов Иван',
                projects: 3,
                tasks: 30
            }
        ],
        'Middle-dev': [
            {
                name: 'Петров Пётр',
                projects: 2,
                tasks: 20
            }
        ],
        'Junior-dev': [
            {
                name: 'Сидоров Сидор',
                projects: 1,
                tasks: 10
            }
        ],
        'Designer': [
            {
                name: 'Анна Смирнова',
                projects: 4,
                tasks: 40
            }
        ]
    };

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
                    {Object.keys(employeesData).map((role) => (
                        <li 
                            key={role}
                            className={`employees__tabs-item ${activeTab === role ? 'employees__tabs-item--active' : ''}`}
                            onClick={() => setActiveTab(role)}
                        >
                            <p className="employees__tabs-text">{role}</p>
                        </li>
                    ))}
                </ul>

                <div className='employees__container'>
                    <h3 className='employees__items-title boards__items-title'>
                        {activeTab}
                    </h3>
                    <div className="employees__items">
                        {employeesData[activeTab].map((employee, index) => (
                            <div className="boards__item" key={index} onClick={onEmployeePopup}>
                                <div className="boards__item-wrapper">
                                    <img className="boards__item-img" src="../../../public/images/projectLast.jpg" alt="Фото сотрудника"/>
                                </div>
                                <h4 className="boards__item-title">{employee.name}</h4>
                                <div className="boards__item-inner">
                                    <p className='boards__item-text'>Проекты:</p>
                                    <p className="boards__item-text">{employee.projects}</p>
                                </div>
                                <div className="boards__item-inner">
                                    <p className='boards__item-text'>Задачи:</p>
                                    <p className="boards__item-text">{employee.tasks}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employees;
