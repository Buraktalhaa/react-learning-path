import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SiteContextProvider } from './context/SiteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </StrictMode>,
)
