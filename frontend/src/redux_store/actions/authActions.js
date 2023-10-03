export const createAccount = (userInfo) => async (dispatch) => {
  //let sample = JSON.stringify({ username: username, password: password, email: [email] })
  // debugger
    try {                         
      const response = await fetch('/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userInfo,
      });
      // debugger
      const data = await response.json();
      // debugger
  
      if (response.status === 201) {
        dispatch({
          type: 'CREATE_ACCOUNT_SUCCESS',
          payload: data.message,
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      dispatch({
        type: 'CREATE_ACCOUNT_FAILURE',
        payload: error.message,
      });
    }
  };


export const signIn = (userInfo) => async (dispatch) => {
  //let sample = JSON.stringify({ username: username, password: password })
  
  try {
    debugger

      const response = await fetch('http://localhost:3000/v1/auth/login', {     
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      // if (response.ok) {
      //   debugger
      //   // WORK TO BE DONE HERE
      //   // DATA NEEDS TO BE PASSED TO REDUX STORE AND UPDATED.. 
      //   // AND THEN REDIRECT TO HOME PAGE
      //   // AND THEN HOME PAGE NEEDS TO REFLECT SIGN IN STATUS. yay 
      // } else {
      //   // debugger
      //   throw Error
      // }
      
      if (response.status === 200) {
        const data = await response.json();
      // Save the JWT token in localStorage
      localStorage.setItem('accessToken', data.tokens.access.token);
      localStorage.setItem('refreshToken', data.tokens.refresh.token);

      localStorage.setItem('userProfile', JSON.stringify(data.user));

      dispatch({
          type: 'SIGN_IN_SUCCESS',
          payload: data.message,
          user: data.user.id,
      });

      dispatch({
        type: 'GET_PROFILE',
        payload: data.user
      })

      return data;

      } else {
      throw new Error(data.message);
      }
  } catch (error) {
    debugger
      dispatch({
      type: 'SIGN_IN_FAILURE',
      payload: error.message,
      });
      return null
  }

};


