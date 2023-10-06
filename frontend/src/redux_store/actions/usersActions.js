// actions/userActions.js
export const fetchUsers = () => async (dispatch) => {
    try {
        // Assuming that fetching users is a GET request without a body
        const response = await fetch('http://localhost:3000/v1/users'); 

        const data = await response.json();
        if (response.status === 200) {
            dispatch({
                type: 'SET_USERS',
                payload: data,
            });
            return data;
        } else {
            throw new Error('Failed to fetch users');
        }
    } catch (error) {
        // Here, I'm assuming a new action type 'FETCH_USERS_FAILURE'
        // You can modify based on your needs
        dispatch({
            type: 'FETCH_USERS_FAILURE',
            payload: error.message,
        });
    }
};
