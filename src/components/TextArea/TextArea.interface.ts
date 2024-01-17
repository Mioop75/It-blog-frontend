import { HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';

export interface ITextArea extends HTMLProps<HTMLTextAreaElement> {
	error?: FieldError;
}
