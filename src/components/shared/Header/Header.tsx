'use client';

import { useAppDispatch } from '@/hooks/useDispatch';
import { useAppSelector } from '@/hooks/useSelector';
import { openModal } from '@/store/modal/modal.slice';
import { getMe, logout } from '@/store/user/user.action';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const Header: FC = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector(state => state.userReducer);

	useEffect(() => {
		dispatch(getMe());
	}, []);

	return (
		<div className={styles.header}>
			<Link href="/" className={styles.logo}>
				Home
			</Link>
			<div className={styles.group}>
				{user ? (
					<>
						<Button color="Red" isLink={true} href="/article/create">
							Write an article
						</Button>
						<Button color="Green" onClick={() => dispatch(logout())}>
							Logout
						</Button>
					</>
				) : (
					<Button onClick={() => dispatch(openModal('auth'))}>Login in</Button>
				)}
			</div>
		</div>
	);
};

export default Header;
