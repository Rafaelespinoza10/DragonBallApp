import { BrowserRouter } from 'react-router-dom';
import './index.css'; 
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DbzApp } from './DbzApp';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
       <DbzApp />  
   </BrowserRouter>  
  // {/* // </StrictMode>, */}
)
