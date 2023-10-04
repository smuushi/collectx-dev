import React from 'react'

const MainPage = () => {
<<<<<<< Updated upstream
  return (
    <div>MainPage</div>
=======

  let authStatus = useSelector(state => state.auth)

  return (
    <>
      <div>MainPage</div>

      {authStatus.isLoggedIn? 
        <h2>Congrats {authStatus.currentUser.name} are signed in</h2> 
        : 
        <h1>Not Logged In</h1>
      }
    </>

>>>>>>> Stashed changes
  )
}

export default MainPage