import Header from '@/components/shared/Header/Header';
import Modals from '@/components/shared/Modals/Modals';
import Nav from '@/components/shared/Nav/Nav';
import StoreContainer from '@/containers/StoreContainer/StoreContainer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StoreContainer>
			<html lang="en">
				<body className={inter.className}>
					<Modals />
					<Header />
					<Nav />
					<main className="container">{children}</main>
				</body>
			</html>
		</StoreContainer>
	);
}
