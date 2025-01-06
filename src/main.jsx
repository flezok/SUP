import { StrictMode } from 'react';
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

import './normalize.scss'
import './global.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Authorization/> */}
      <Header />
      <div className="container">
        <Menu />
        <Routes>
          {/* <Home /> */}
          {/* <Account/> */}
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/project" element={<Project />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  </StrictMode>,
)
