//React
import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import App from './App.jsx'

//Styles
import './index.css'

//Router
import { BrowserRouter } from "react-router-dom"

//Redux
import { Provider } from 'react-redux'
import { store } from './redux_store/store.js'

//Framer Motion
import { AnimatePresence } from 'framer-motion';


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
