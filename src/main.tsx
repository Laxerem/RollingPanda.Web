import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/global.css'
import './assets/style/fonts.css'
import Router from './router'
import Header from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Router />
  </StrictMode>,
)