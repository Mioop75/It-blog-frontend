import { IUser } from '@/types/user.interface';

export interface IUserInitialState {
	isLoading: boolean;
	user: IUser | null;
	error?: any;
}
