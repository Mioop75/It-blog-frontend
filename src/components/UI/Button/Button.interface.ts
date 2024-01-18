import { HTMLProps } from 'react';

export interface IButton extends HTMLProps<HTMLButtonElement> {
	color?: 'Green' | 'Red' | 'Blue';
	isLink?: boolean;
}
