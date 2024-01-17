'use client';

import Loader from '@/components/Loader/Loader';
import FormArticle from '@/forms/FormArticle';
import { useGetArticleQuery } from '@/store/api/articles';
import { useParams } from 'next/navigation';

export default function UpdatePost() {
	const { id } = useParams();

	const { isLoading, data } = useGetArticleQuery(id as string);

	if (isLoading) {
		return <Loader />;
	}

	return <FormArticle action="Update" article={data} />;
}
