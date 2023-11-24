import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'

import { AnimatePresence } from 'framer-motion';
import { store } from './redux_store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
      <Provider store={store}>
        <App />
      </Provider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>

)
