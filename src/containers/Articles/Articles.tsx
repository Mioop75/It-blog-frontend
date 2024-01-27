import Card from '@/components/shared/Card/Card';
import { IArticle } from '@/types/article.interface';
import styles from './Articles.module.scss';

type ArticlesProps = {
	articles: IArticle[];
};

const Articles = ({ articles }: ArticlesProps) => {
	return (
		<div className={styles.articles}>
			{articles.map(article => (
				<Card key={article.uuid} post={article} />
			))}
		</div>
	);
};

export default Articles;
