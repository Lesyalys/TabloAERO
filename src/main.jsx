import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=" min-h-screen mx-2 text-white h-[100vh] md:overflow-hidden">
      <App />
    </div>
  </StrictMode>,
)
