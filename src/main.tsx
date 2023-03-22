import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
