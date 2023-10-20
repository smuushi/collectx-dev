
const initialState = {
    isLoggedIn: false,
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
    case 'AUTHENTICATION_VALID':
        // debugger
    return {
        isLoggedIn: true,
        message: '',
        currentUser: action.payload
    }
    case 'LOGOUT_SUCCESS':
    return {
        ...state,
        isLoggedIn: false,
        message: action.payload,
        currentUser: null
    };
    default:
    return state;
}
};

export default authReducer;
  