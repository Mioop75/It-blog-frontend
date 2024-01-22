'use client';

import Loader from '@/components/UI/Loader/Loader';
import FormArticle from '@/components/forms/FormArticle/FormArticle';
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
