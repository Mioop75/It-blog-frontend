import Pagination from '@/components/shared/Pagination/Pagination';
import Articles from '@/containers/Articles/Articles';
import articlesService from '@/services/articles.service';

export default async function Home() {
	const articles = await articlesService.getAll();

	return (
		<div>
			<Articles articles={articles} />
			<Pagination />
		</div>
	);
}
