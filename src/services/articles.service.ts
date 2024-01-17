import { IInputArticle } from '@/types/article.interface';
import axios from '@/utils/axios';

export const ARTICLES = 'articles';

class ArticlesService {
	async getAll() {
		const articles = await axios.get(ARTICLES);
		return articles.data;
	}

	async getOne(slug: string) {
		const article = await axios.get(`${ARTICLES}/${slug}`);
		return article.data;
	}

	async createArticle(data: IInputArticle) {
		try {
			const preview = await this.sendImage(data.previewFile[0]);

			if (!preview) {
				throw Error;
			}

			const tags = data.tags.split(',');

			const article = await axios.post(ARTICLES, {
				title: data.title,
				content: data.content,
				preview,
				tags,
			});

			if (!article) {
				return false;
			}

			return true;
		} catch (error) {
			return false;
		}
	}

	async updateArticle(slug: string, data: IInputArticle) {
		try {
			const preview = await this.sendImage(data.previewFile[0]);

			if (!preview) {
				throw Error;
			}

			const tags = data.tags.split(',');

			const article = await axios.put(`${ARTICLES}/${slug}`, {
				preview,
				title: data.title,
				content: data.content,
				tags,
			});

			if (!article) {
				return false;
			}

			return true;
		} catch (error) {
			return false;
		}
	}

	async deleteArticle(slug: string) {
		await axios.delete(`${ARTICLES}/${slug}`);
		return true;
	}

	async sendImage(img: any) {
		if (!img) {
			return false;
		}

		try {
			const formData = new FormData();
			formData.append('preview', img);
			const file = await axios.post(`${ARTICLES}/send-image`, formData);
			return file.data.path;
		} catch (error) {
			throw error;
		}
	}
}

export default new ArticlesService();
