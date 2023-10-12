import React from 'react'

import { useSelector } from 'react-redux';
import { pageSettings } from './../../constants/style';

const MainPage = () => {

  let authStatus = useSelector(state => state.auth)
  let allUsers = useSelector(state => state.users)

  // debugger
  let currentUser = allUsers[authStatus.currentUser]
  console.log(currentUser)
  return (
    <div className={`${pageSettings.padding}`}>
    <div>MainPage</div>

    {authStatus.isLoggedIn? 
      <h2>Congrats is signed in</h2> 
      : 
      <h1>Not Logged In</h1>
    }
    </div>

  )
}

export default MainPage