export const storedProfile = localStorage.getItem('userProfile');
const initialState = 
    null
  ;

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'GET_PROFILE':
        return {
            ...state,
            profile: action.payload,
        };
        case 'GET_PROFILE_FAILURE':
        return {
            ...state,
            profile: action.payload,
        };
        case 'REMOVE_PROFILE':
        return {
            profile: null
        }
        default:
        return state;
    }
};

export default profileReducer;