import TagList from '@/containers/TagList/TagList';
import { FC } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.scss';

const Nav: FC = () => {
	return (
		<div className={styles.nav}>
			<SearchBar />
			<TagList />
		</div>
	);
};

export default Nav;
