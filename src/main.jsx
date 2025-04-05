import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GuestProvider } from './contexts/GuestContexto.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GuestProvider>
        <App />
      </GuestProvider>
    </BrowserRouter>
  </StrictMode>,
)
