import { IArticle } from './article.interface';
import { IRole } from './role.interface';

export interface IUser {
	uuid: string;
	avatar?: string;
	email: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	role: IRole;
	article: IArticle[];
}
