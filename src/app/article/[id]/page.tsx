'use client';

import Article from '@/components/shared/Article/Article';
import { useParams } from 'next/navigation';

export default function ArticlePage() {
	const { id } = useParams();

	return <Article slug={id as string} />;
}
