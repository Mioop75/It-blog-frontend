import { IAuth } from '@/services/auth/auth.interface';
import authService, { AUTH } from '@/services/auth/auth.service';
import { IUser } from '@/types/user.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registration = createAsyncThunk<IUser, IAuth>(
	`${AUTH}/registration`,
	async (data, thunkApi) => {
		try {
			const response = await authService.register(data);

			return response;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);

export const login = createAsyncThunk<IUser, IAuth>(
	`${AUTH}/login`,
	async (data, thunkApi) => {
		try {
			const response = await authService.login(data);
			return response;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);

export const logout = createAsyncThunk<IUser>(
	`${AUTH}/logout`,
	async (_, thunkApi) => {
		try {
			const response = await authService.logout();
			return response;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.response.data.message);
		}
	}
);

export const getMe = createAsyncThunk<IUser>(
	`${AUTH}/me`,
	async (_, thunkApi) => {
		const response = await authService.getMe();
		return response;
	}
);
