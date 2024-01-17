'use client';

import { FC } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar: FC = () => {
	return (
		<input type="search" className={styles.search} placeholder="Search..." />
	);
};

export default SearchBar;
