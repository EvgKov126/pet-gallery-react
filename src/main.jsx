import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import log from './utils/logger';

log.info("Застосунок Pet Gallery успішно запущено");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </StrictMode>,
)
