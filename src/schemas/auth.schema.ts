import { object, string } from 'yup';

export const registrationSchema = object({
	email: string().email().required(),
	name: string().required(),
	password: string().required(),
}).required();

export const loginSchema = registrationSchema
	.pick(['name', 'password'])
	.required();
