'use client';

import { ITag } from '@/types/tag.interface';
import styles from './Tag.module.scss';

const Tag = ({ name }: ITag) => {
	return <div className={styles.item}>{name}</div>;
};

export default Tag;
