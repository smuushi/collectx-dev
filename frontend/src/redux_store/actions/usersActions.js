// actions/userActions.js
export const fetchUsers = () => async (dispatch) => {
    try {
        // Assuming that fetching users is a GET request without a body
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/users`); 

        const data = await response.json();
        if (response.status === 200) {
            console.log(data)
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

export const uploadUserProfilePic = (userId, file) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        // Retrieve the token from local storage
        const token = localStorage.getItem('accessToken');

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/profile/${userId}/pfp`, {
            method: 'POST',
            body: formData,
            headers: {
                // Include the Authorization header with the token
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw new Error('Failed to upload profile picture');
        }

        const updatedUser = await response.json();

        dispatch({
            type: 'UPDATE_USER',
            payload: updatedUser
        });

        return updatedUser;
    } catch (error) {
        console.error('Error uploading file:', error);
        // You can dispatch an action here to notify of the upload failure if needed.
        // e.g., UPDATE_PROFILE_PIC_FAILURE
    }
};
