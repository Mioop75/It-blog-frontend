'use client';

import { store } from '@/store/store';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const StoreContainer: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreContainer;
