import { storedProfile } from "./profileReducer";
const initialState = {
    isLoggedIn: storedProfile ? true : false,
    message: '',
    currentUser: null,
  };

const authReducer = (state = initialState, action) => {
    // debugger
switch (action.type) {
    case 'CREATE_ACCOUNT_SUCCESS':
    return {
        ...state,
        message: action.payload,
    };
    case 'CREATE_ACCOUNT_FAILURE':
    return {
        ...state,
        message: action.payload,
    };
    case 'SIGN_IN_SUCCESS':
    return {
        ...state,
        isLoggedIn: true,
        message: action.payload,
        currentUser: action.user,
    };
    case 'SIGN_IN_FAILURE':
    return {
        ...state,
        message: action.payload,
    };
    default:
    return state;
}
};

export default authReducer;
  