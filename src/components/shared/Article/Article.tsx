'use client';

import Loader from '@/components/UI/Loader/Loader';
import { useGetArticleQuery } from '@/store/api/articles';
import Image from 'next/image';
import Date from '../Date/Date';
import TagList from '../TagList/TagList';
import styles from './Article.module.scss';

type ArticleProps = {
	slug: string;
};

const Article = ({ slug }: ArticleProps) => {
	const { isLoading, data: article } = useGetArticleQuery(slug);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className={styles.article}>
			<h1 className={styles.title}>{article?.title}</h1>
			<TagList />
			{/* <div className={styles.description}>{article?.content}</div> */}
			<div className={styles.meta}>
				<div className={styles.writer}>
					<Image
						src={'/' + article?.preview}
						alt=""
						width={48}
						height={48}
						className={styles.writerIcon}
					/>
					<span className={styles.writerName}>{article?.author?.name}</span>
				</div>
				<Date createdAt={article?.createdAt} />
			</div>
			<Image
				src={'/' + article?.preview}
				alt=""
				width={960}
				height={504}
				className={styles.thumbnail}
			/>
			<div className={styles.content}>{article?.content}</div>
		</div>
	);
};

export default Article;
