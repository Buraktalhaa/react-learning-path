import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
- [x] Pico CSS kullanilsin
- [ ] Ana gorsel olsun
- [ ] Hemen altta 5 adet kucuk gorsel olsun
- [ ] Kucuk gorsellerden birine tiklaninca ana gorsel degissin
*/