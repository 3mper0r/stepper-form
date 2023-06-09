import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/Layout'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout/>
      <App />
  </React.StrictMode>,
)
