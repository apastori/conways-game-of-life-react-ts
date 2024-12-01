import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Safely get the root element from the DOM
const rootElement: HTMLElement | null = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element is not found in Base HTML')
}

if (!(rootElement instanceof HTMLDivElement)) {
  throw new Error('Root element is not a DIV element')
}

createRoot(rootElement as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
