import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { CountryProvider } from './context/CountryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CountryProvider>
          <App />
        </CountryProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
