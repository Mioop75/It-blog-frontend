import dayjs from 'dayjs';
import Image from 'next/image';
import styles from './Date.module.scss';

type DateProps = {
	createdAt?: Date;
};

const Date = ({ createdAt }: DateProps) => {
	const date = dayjs(createdAt).format('D MMMM, YYYY');

	return (
		<div className={styles.date}>
			<Image src="clock.svg" alt="" width={16} height={16} />
			{date}
		</div>
	);
};

export default Date;
