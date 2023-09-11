export const getProfile = (uuid) => async (dispatch) => {
    try {
        const response = await fetch('placeholder url...', {     
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({uuid: uuid})
        });
  
        const data = await response.json();
        if (response.status === 200) {
        dispatch({
            type: 'GET_PROFILE',
            payload: data.profile,
        });
        return data;
        } 
    } catch (error) {
        dispatch({
            type: 'GET_PROFILE_FAILURE',
            payload: error.message,
        });
    }
};