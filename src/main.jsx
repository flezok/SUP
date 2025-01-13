import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Authorization from './components/authorization/authorization';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/menu.jsx';
import Home from './components/home/Home.jsx';
import Account from './components/account/Account.jsx';
import Boards from './components/boards/Boards.jsx';
import Project from './components/project/project.jsx';
import Employees from './components/emloyees/Employees.jsx';
import PopupSearch from './components/popups/popupSearch/popupSearch.jsx';
import PopupCreateProject from './components/popups/popupCreateProject/PopupCreateProject.jsx';
import PopupEmployee from './components/popups/popupEmployee/PopupEmployee.jsx';

import './normalize.scss'
import './global.scss'

const App = () => {
    const [isFocusedSearch, setIsFocusedSearch] = useState(false);
    const [createProject, setCreateProject] = useState(false);
    const [employeePopup, setEmployeePopup] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [confirmTitle, setConfirmTitle] = useState('фыв');
    const [openSettingsProject, setOpenSettingsProject] = useState(false);

    const onSearchPopupOpen = () => {
      setIsFocusedSearch(true);
    };

    const onSearchPopupClose = () => {
      setIsFocusedSearch(false);
    };

    const onOpenCreateProject = () => {
        if (isFocusedSearch === true){
            setIsFocusedSearch(false);
        }
        setCreateProject(!createProject);
    };

    const onEmployeePopup = () => {
        if (isFocusedSearch === true){
            setIsFocusedSearch(false);
        }
        setEmployeePopup(!employeePopup);
    };

    const onOpenAddMember = () => {
        setOpenAddMember(!openAddMember)
    }

    const onOpenConfirm = (title) => {
        setConfirmTitle(title);
        setOpenConfirm(!openConfirm)
    }

    const onOpenSettingsProject = () => {
        setOpenSettingsProject(!openSettingsProject)
    }
    

    return (
        <StrictMode>
            <BrowserRouter>
                {/* <Authorization/> */}
                <Header onSearchPopupOpen={onSearchPopupOpen}
                        onOpenCreateProject={onOpenCreateProject}/>
                <div className="container">
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/boards" element={<Boards />} />
                        <Route path="/project" 
                               element={<Project onOpenAddMember={onOpenAddMember} 
                                                 openAddMember={openAddMember}
                                                 onOpenConfirm={onOpenConfirm} 
                                                 openConfirm={openConfirm} 
                                                 onOpenSettingsProject={onOpenSettingsProject}
                                                 openSettingsProject={openSettingsProject} 
                                                 confirmTitle={confirmTitle}/>} />
                        <Route path="/employees" element={<Employees onEmployeePopup={onEmployeePopup}/>} />
                    </Routes>
                    {isFocusedSearch && <PopupSearch onSearchPopupClose={onSearchPopupClose}/>}
                    {createProject && <PopupCreateProject onOpenCreateProject={onOpenCreateProject} onOpenAddMember={onOpenAddMember} openAddMember={openAddMember}/>}
                    {employeePopup && <PopupEmployee onEmployeePopup={onEmployeePopup}/>}
                </div>
            </BrowserRouter>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<App />);
