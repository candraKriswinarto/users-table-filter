import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UsersProvider from './context/UsersContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
)
