import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './Pages/App.jsx'
import Instructions from './Pages/Instructions.jsx'
//import Home from './Pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div><App /></div> */}
    <div><Instructions /></div>
  </StrictMode>
)
