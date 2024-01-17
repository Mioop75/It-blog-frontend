'use client';

import { forwardRef } from 'react';
import { IField } from './Field.interface';
import styles from './Field.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', placeholder, error, ...rest }, ref) => {
		return (
			<div className={styles.form__group} ref={ref}>
				<input
					type={type}
					className={styles.form__field}
					placeholder={placeholder}
					{...rest}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		);
	}
);

export default Field;
