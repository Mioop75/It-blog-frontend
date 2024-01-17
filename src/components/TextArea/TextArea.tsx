'use client';

import { forwardRef } from 'react';
import { ITextArea } from './TextArea.interface';
import styles from './TextArea.module.scss';

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ id, placeholder, error, ...rest }, ref) => {
		return (
			<div className={styles.form__group}>
				<textarea
					className={styles.form__field}
					placeholder={placeholder}
					name={id}
					ref={ref}
					{...rest}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		);
	}
);

export default TextArea;
