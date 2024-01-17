import { mixed, object, string } from 'yup';

export const articleSchema = object({
	previewFile: mixed<File[]>().required(),
	title: string().required(),
	content: string().required(),
	tags: string().required(),
}).required();
