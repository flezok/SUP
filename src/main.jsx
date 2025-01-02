import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Authorization from './components/authorization/authorization';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/menu.jsx';

import './normalize.scss'
import './global.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Authorization/> */}
    <Header />
    <Menu />

  </StrictMode>,
)
