import { useAppDispatch } from '@/hooks/useDispatch';
import { closeModal } from '@/store/modal/modal.slice';
import { FC, PropsWithChildren } from 'react';
import styles from './ModalContainer.module.scss';

const ModalContainer: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.modal}>
			<div className={styles.box}>
				<button className={styles.close} onClick={() => dispatch(closeModal())}>
					X
				</button>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default ModalContainer;
