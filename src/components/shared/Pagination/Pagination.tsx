import { FC } from 'react';
import styles from './Pagination.module.scss';

const Pagination: FC = () => {
	return (
		<ul className={styles.pagination}>
			<li className={styles.list}>
				<span className={`${styles.item} ${styles.current}`}>1</span>
			</li>
		</ul>
	);
};

export default Pagination;
