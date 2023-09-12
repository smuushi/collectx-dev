import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import Splash from './components/Splash'
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </>
  )
}

export default App
