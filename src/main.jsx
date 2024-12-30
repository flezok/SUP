import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Authorization from './components/authorization/authorization';

import './normalize.scss'
import './global.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authorization/>
  </StrictMode>,
)
