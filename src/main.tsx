import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRouter } from 'components'

import './assets/styles/reset.css'
import './assets/styles/fonts.css'
import './assets/styles/variables.css'
import './assets/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
