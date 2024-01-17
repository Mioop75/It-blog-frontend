import { ARTICLES } from '@/services/articles.service';
import { IArticle } from '@/types/article.interface';
import { api } from './api';

const ArticlesApi = api.injectEndpoints({
	endpoints: builder => ({
		getArticle: builder.query<IArticle, string>({
			query: (slug: string) => `${ARTICLES}/${slug}`,
		}),
	}),
	overrideExisting: false,
});

export const { useGetArticleQuery } = ArticlesApi;
