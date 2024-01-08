import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./styles/defaults/variables.css";
import "./styles/defaults/transitions.css";
import "./styles/defaults/page-setup.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
