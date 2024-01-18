'use client';

import { useAppSelector } from '@/hooks/useSelector';
import { FC } from 'react';
import AuthModal from './AuthModal/AuthModal';

const Modals: FC = () => {
	const { name, isOpen } = useAppSelector(state => state.modalReducer);

	if (isOpen) {
		return <>{name == 'auth' && <AuthModal />}</>;
	}

	return null;
};

export default Modals;
