import Articles from '@/components/Articles/Articles';
import Pagination from '@/components/Pagination/Pagination';
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
