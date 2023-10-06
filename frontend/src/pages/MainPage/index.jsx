import React from 'react'

import { useSelector } from 'react-redux';

const MainPage = () => {

  let authStatus = useSelector(state => state.auth)
  let allUsers = useSelector(state => state.users)

  // debugger
  let currentUser = allUsers[authStatus.currentUser]

  return (
    <>
    <div>MainPage</div>

    {authStatus.isLoggedIn? 
      <h2>Congrats {currentUser.username} is signed in</h2> 
      : 
      <h1>Not Logged In</h1>
    }
    </>

  )
}

export default MainPage