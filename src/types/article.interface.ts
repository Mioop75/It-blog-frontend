import { ITag } from './tag.interface';
import { IUser } from './user.interface';

export interface IArticle {
	uuid: string;
	preview: string;
	title: string;
	slug: string;
	content: string;
	tags?: ITag[];
	author: IUser;
	createdAt: Date;
}

export interface IInputArticle extends Pick<IArticle, 'title' | 'content'> {
	previewFile?: File[];
	tags: string;
}
