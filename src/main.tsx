import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { ThemePovider } from './ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemePovider>
       <App />
    </ThemePovider>
 
  </StrictMode>,
)
