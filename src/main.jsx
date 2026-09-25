import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Tipografías (incluidas en el proyecto; no dependen de internet).
// Solo se carga el subconjunto "latin" (incluye tildes y ñ) para que la web sea más liviana.
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/poppins/latin-700.css'
import '@fontsource/nunito/latin-400.css'
import '@fontsource/nunito/latin-600.css'
import '@fontsource/nunito/latin-700.css'
import '@fontsource/dancing-script/latin-600.css'

// Estilos globales
import './styles/theme.css'
import './styles/global.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
