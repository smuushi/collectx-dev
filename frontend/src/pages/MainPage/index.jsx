import React from 'react'

import { useSelector } from 'react-redux';
import { pageSettings } from './../../constants/style';

const MainPage = () => {

  let authStatus = useSelector(state => state.auth)
  let allUsers = useSelector(state => state.users)
  let currentUser = allUsers[authStatus.currentUser]
  
  console.log(authStatus.isLoggedIn)
  return (
    <div className={`${pageSettings.padding}`}>
    <div>MainPage</div>

    {authStatus.isLoggedIn? 
      <h2>Congrats {currentUser.username} is signed in</h2> 
      : 
      <h1>Not Logged In</h1>
    }
    </div>

  )
}

export default MainPage