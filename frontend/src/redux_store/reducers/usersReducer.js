const initialState = {};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            const newUsersState = {};

            console.log(action.payload.results)

            action.payload.results.forEach(user => {
                newUsersState[user.id] = user;
            });
            return newUsersState;
        case 'UPDATE_USER':
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        // ... add more cases as needed
        default:
            return state;
    }
};

export default usersReducer;
