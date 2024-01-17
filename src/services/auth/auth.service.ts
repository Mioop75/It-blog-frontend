import axios from '@/utils/axios';
import { IAuth } from './auth.interface';

export const AUTH = 'auth';

class AuthService {
	async register(data: IAuth) {
		try {
			const user = await axios.post(`${AUTH}/register`, data);
			return user.data;
		} catch (error) {
			throw error;
		}
	}

	async login(data: IAuth) {
		try {
			const user = await axios.post(`${AUTH}/login`, data);
			return user.data;
		} catch (error) {
			throw error;
		}
	}

	async logout() {
		try {
			const user = await axios.get(`${AUTH}/logout`);
			return user.data;
		} catch (error) {
			throw error;
		}
	}

	async getMe() {
		try {
			const user = await axios.get(`${AUTH}/me`);
			return user.data;
		} catch (error) {
			throw error;
		}
	}
}

export default new AuthService();
