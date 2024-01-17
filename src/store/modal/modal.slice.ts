import { createSlice } from '@reduxjs/toolkit';
import { IModalState } from './modal.interface';

const initialState: IModalState = {
	isOpen: false,
	name: null,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
			state.name = action.payload;
		},
		closeModal: state => {
			state.isOpen = false;
			state.name = null;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
