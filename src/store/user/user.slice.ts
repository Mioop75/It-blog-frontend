import { createSlice } from '@reduxjs/toolkit';
import { getMe, login, logout, registration } from './user.action';
import { IUserInitialState } from './user.interface';

const initialState: IUserInitialState = {
	isLoading: false,
	user: null,
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(registration.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(registration.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(registration.rejected, (state, action) => {
			state.isLoading = false;
			state.user = null;
			state.error = action.payload;
		});
		builder.addCase(login.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false;
			state.user = null;
			state.error = action.payload;
		});
		builder.addCase(logout.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(logout.fulfilled, state => {
			state.isLoading = false;
			state.user = null;
		});
		builder.addCase(logout.rejected, state => {
			state.isLoading = false;
			state.user = null;
			state.error = null;
		});
		builder.addCase(getMe.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
	},
});

export default userSlice.reducer;
