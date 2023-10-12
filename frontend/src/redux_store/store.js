import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer
  },
});


