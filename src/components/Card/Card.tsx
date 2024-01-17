import { IArticle } from '@/types/article.interface';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../Date/Date';
import TagList from '../TagList/TagList';
import styles from './Card.module.scss';

type CardProps = {
	post: IArticle;
};

const Card = ({ post }: CardProps) => {
	return (
		<Link href={`/article/${post.slug}`} className={styles.card}>
			<Image
				src={'/' + post.preview}
				alt={post.title}
				width={240}
				height={126}
				className={styles.img}
			/>
			<div>
				<h3 className={styles.title}>{post.title}</h3>
				<TagList tags={post.tags} />
				<Date createdAt={post.createdAt} />
			</div>
		</Link>
	);
};

export default Card;
