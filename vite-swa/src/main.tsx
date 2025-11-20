import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import the XDS Components library
import { defineCustomElements } from '@xds/components/loader';

// This will make the XDS components available project wide.
defineCustomElements();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
