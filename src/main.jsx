import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, redirect } from 'react-router-dom';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import Authorization from './components/authorization/Authorization';
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
import Registration from './components/registration/registration.jsx';

import './normalize.scss'
import './global.scss'

const queryClient = new QueryClient();

const App = () => {
    const [isFocusedSearch, setIsFocusedSearch] = useState(false);
    const [createProject, setCreateProject] = useState(false);
    const [employeePopup, setEmployeePopup] = useState(false);
    const [openAddMember, setOpenAddMember] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openProjectMembers, setOpenProjectMembers] = useState(false);
    const [confirmTitle, setConfirmTitle] = useState('');
    const [openSettingsProject, setOpenSettingsProject] = useState(false);


    const onSearchPopupOpen = () => {
        setIsFocusedSearch(true);
    };

    const onSearchPopupClose = () => {
        setIsFocusedSearch(false);
    };

    const onOpenCreateProject = () => {
        if (isFocusedSearch === true) {
            setIsFocusedSearch(false);
        }
        setCreateProject(!createProject);
    };

    const onEmployeePopup = () => {
        if (isFocusedSearch === true) {
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

    const onOpenProjectMembers = () => {
        setOpenProjectMembers(!openProjectMembers)
    }

    const router = createBrowserRouter([
        {
            path: "/auth",
            element: <Authorization />
        },
        {
            path: "/registration",
            element: <Registration />
        },
        {
            path: "/",
            id: "root",
            loader: async () => {
                return axios.get("http://localhost:3000/user/check", { withCredentials: true }).then(({ data }) => {
                    return data;
                }).catch(() => {
                    return redirect("/auth");
                });
            },
            element: (
                <>
                    <Header onSearchPopupOpen={onSearchPopupOpen}
                        onOpenCreateProject={onOpenCreateProject} />
                    <div className="container">
                        <Menu />
                        {<Outlet />}
                    </div>
                </>
            ),
            errorElement: (<h1>Войдите в систему</h1>),
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/account",
                    element: <Account />
                },
                {
                    path: "/boards",
                    element: <Boards />
                },
                {
                    path: "/project",
                    element: <Project onOpenAddMember={onOpenAddMember}
                        openAddMember={openAddMember}
                        onOpenConfirm={onOpenConfirm}
                        openConfirm={openConfirm}
                        onOpenSettingsProject={onOpenSettingsProject}
                        openSettingsProject={openSettingsProject}
                        confirmTitle={confirmTitle}
                        onOpenProjectMembers={onOpenProjectMembers}
                        openProjectMembers={openProjectMembers}
                        onEmployeePopup={onEmployeePopup} />
                },
                {
                    path: "employees",
                    element: <Employees onEmployeePopup={onEmployeePopup} />
                }
            ]
        }
    ])


    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                {/* <BrowserRouter>
                <Authorization/>
                <Header onSearchPopupOpen={onSearchPopupOpen}
                        onOpenCreateProject={onOpenCreateProject}/>
                <div className="container">
                    <Menu />
                    <Routes>
                        <Route path="/registration" element={<Registration />} />
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
                                                 confirmTitle={confirmTitle}
                                                 onOpenProjectMembers={onOpenProjectMembers}
                                                 openProjectMembers={openProjectMembers}
                                                 onEmployeePopup={onEmployeePopup}/>} />
                        <Route path="/employees" element={<Employees onEmployeePopup={onEmployeePopup}/>} />
                    </Routes> */}
                {isFocusedSearch && <PopupSearch onSearchPopupClose={onSearchPopupClose} />}
                {createProject && <PopupCreateProject onOpenCreateProject={onOpenCreateProject} onOpenAddMember={onOpenAddMember} openAddMember={openAddMember} />}
                {employeePopup && <PopupEmployee onEmployeePopup={onEmployeePopup} />}
                {/* </div>
            </BrowserRouter> */}
            </QueryClientProvider>
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<App />);
