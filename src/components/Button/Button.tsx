'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { IButton } from './Button.interface';
import styles from './Button.module.scss';

const Button: FC<IButton> = ({
	className,
	children,
	color = 'Blue',
	type = 'button',
	isLink = false,
	href = '',
	...rest
}) => {
	return (
		<>
			{isLink ? (
				<Link
					className={classNames(styles.btn, className, {
						[styles.green]: color === 'Green',
						[styles.red]: color === 'Red',
					})}
					href={href}
				>
					{children}
				</Link>
			) : (
				<button
					className={classNames(styles.btn, className, {
						[styles.green]: color === 'Green',
						[styles.red]: color === 'Red',
					})}
					{...rest}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
