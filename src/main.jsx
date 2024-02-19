import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import './styles.css'
import { PersonajesApp } from './PersonajesApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonajesApp />
    </BrowserRouter>    
  </React.StrictMode>,
)
