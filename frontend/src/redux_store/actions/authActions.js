export const createAccount = (username, password, email) => async (dispatch) => {
  let sample = JSON.stringify({ username: username, password: password, email: [email] })
  // debugger
    try {                         
      const response = await fetch('placeholder url...', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: sample,
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


export const signIn = (username, password) => async (dispatch) => {
  let sample = JSON.stringify({ username: username, password: password })
  try {
      const response = await fetch('placeholder url...', {     
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: sample,
      });

      const data = await response.json();

      if (response.status === 200) {
      // Save the JWT token in localStorage
      localStorage.setItem('token', data.token);

      dispatch({
          type: 'SIGN_IN_SUCCESS',
          payload: data.message,
          user: data.currentUser,
      });
      return data;

      } else {
      throw new Error(data.message);
      }
  } catch (error) {
      dispatch({
      type: 'SIGN_IN_FAILURE',
      payload: error.message,
      });
  }
};


