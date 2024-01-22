'use client';

import Button from '@/components/UI/Button/Button';
import Field from '@/components/UI/Field/Field';
import { useAppDispatch } from '@/hooks/useDispatch';
import { useAppSelector } from '@/hooks/useSelector';
import { loginSchema, registrationSchema } from '@/schemas/auth.schema';
import { IAuth } from '@/services/auth/auth.interface';
import { login, registration } from '@/store/user/user.action';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalContainer from '../ModalContainer/ModalContainer';
import styles from './AuthModal.module.scss';

const AuthModal: FC = () => {
	const [isRegistration, setIsRegistration] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isSubmitted, isLoading, isValid },
	} = useForm<IAuth>({
		resolver: yupResolver(isRegistration ? registrationSchema : loginSchema),
	});

	const dispatch = useAppDispatch();
	const { error } = useAppSelector(state => state.userReducer);

	const onSubmit = handleSubmit(data => {
		if (!isValid) return null;

		if (isRegistration) {
			dispatch(registration(data));
		} else {
			dispatch(login(data));
		}

		console.log(isSubmitSuccessful);
		console.log(isSubmitted);
	});

	return (
		<ModalContainer>
			<form onSubmit={onSubmit} className={styles.form}>
				{isRegistration && (
					<div>
						<Field
							type="email"
							placeholder="email"
							error={errors.email}
							{...register('email')}
						/>
					</div>
				)}
				<div>
					<Field placeholder="name" error={errors.name} {...register('name')} />
				</div>
				<div>
					<Field
						type="password"
						placeholder="password"
						error={errors.password}
						{...register('password')}
					/>
				</div>
				<div className={styles.btn}>
					{error && <span className={styles.errorMessage}>{error}</span>}
					{isRegistration ? (
						<Button>Sign up</Button>
					) : (
						<Button>Login in</Button>
					)}
					{isRegistration ? (
						<div className={styles.marker}>
							You already have an account?{' '}
							<span onClick={() => setIsRegistration(false)}>Login</span>
						</div>
					) : (
						<div className={styles.marker}>
							You don&apos;t have an account?{' '}
							<span onClick={() => setIsRegistration(true)}>Sign up</span>
						</div>
					)}
				</div>
			</form>
		</ModalContainer>
	);
};

export default AuthModal;
