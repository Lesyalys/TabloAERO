import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-slate-900 min-h-screen mx-12 text-white">
      <App />
    </div>
  </StrictMode>,
)
