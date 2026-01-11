import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Force Branding Update (Bypasses Cache)
document.title = "Faisal Al-numani";
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'icon';
link.href = 'https://github.com/f9-o.png';
document.head.appendChild(link);
