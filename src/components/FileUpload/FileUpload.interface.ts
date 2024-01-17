import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IFileUplaod
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	fieldChange: (FILES: File[]) => void;
	mediaUrl?: string;
}
