import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SimpleCounter from './components/SimpleCounter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SimpleCounter/>
  </React.StrictMode>,
)
