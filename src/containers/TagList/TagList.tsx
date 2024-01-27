import Tag from '@/components/shared/Tag/Tag';
import { ITag } from '@/types/tag.interface';
import styles from './TagList.module.scss';

type TagListProps = {
	tags?: ITag[];
};

const TagList = ({ tags }: TagListProps) => {
	return (
		<ul className={styles.tags}>
			{tags?.map(tag => (
				<li key={tag.id}>
					<Tag {...tag} />
				</li>
			))}
		</ul>
	);
};

export default TagList;
