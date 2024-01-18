import { HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

export interface IField extends HTMLProps<HTMLInputElement> {
	error?: FieldError;
}
