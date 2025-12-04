import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/global.scss'
import './assets/style/fonts.scss'
import Router from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)