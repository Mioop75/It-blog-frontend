import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api/api';
import modalReducer from './modal/modal.slice';
import userReducer from './user/user.slice';

const rootReducer = combineReducers({
	modalReducer: modalReducer,
	userReducer: userReducer,
	[api.reducerPath]: api.reducer,
});

export default rootReducer;
