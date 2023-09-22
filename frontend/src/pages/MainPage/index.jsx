import React from 'react'

import { useSelector } from 'react-redux';

const MainPage = () => {

  let authStatus = useSelector(state => state.auth)

  

  return (
    <>
      <div>MainPage</div>

      {authStatus.isLoggedIn? <h2>Congrats you are signed in</h2> : <h1>Not Logged In</h1>}
    </>

  )
}

export default MainPage