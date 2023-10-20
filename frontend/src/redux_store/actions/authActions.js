export const createAccount = (userInfo) => async (dispatch) => {
  //let sample = JSON.stringify({ username: username, password: password, email: [email] })
  // debugger
    try {                         
      const response = await fetch('http://localhost:3000/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
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
    // debugger
      const response = await fetch('http://localhost:3000/v1/auth/login', {     
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.status === 200) {
        const data = await response.json();
      // Save the JWT token in localStorage
      localStorage.setItem('accessToken', data.tokens.access.token);
      localStorage.setItem('refreshToken', data.tokens.refresh.token);

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
export const logout = () => async (dispatch) => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await fetch("http://localhost:3000/v1/auth/logout",{
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken })
    });
    if (response.status === 204) {
      // If the logout request is successful (status code 204), clear user data.
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      dispatch({ type: 'LOGOUT_SUCCESS' });
      dispatch({ type: 'REMOVE_PROFILE' })
    } 
    
  } catch {
    // Handle any network or request errors here.
    // Dispatch an action to indicate logout failure.
    dispatch({ type: 'LOGOUT_FAILURE' });
  }
}

export const checkAuthentication = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/v1/auth/verifyToken', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    if (response.ok) {
      // Token is still valid
      const data = await response.json();
      // debugger
      dispatch({
        type: 'AUTHENTICATION_VALID',
        payload: data.userId
      });
    } else {
      // Token might be expired or invalid
      throw new Error('Token is invalid or expired');
    }
  } catch (error) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userProfile');
    
    dispatch({
      type: 'AUTHENTICATION_ERROR'
    });
  }
};
