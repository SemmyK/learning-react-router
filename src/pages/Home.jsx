import SingleArticle from '../components/SingleArticle'
import useFetch from '../hooks/useFetch'

function Home() {
	const {
		data: articles,
		loading,
		error,
	} = useFetch('http://localhost:3000/articles')
	return (
		<article className='home'>
			<h2>Articles</h2>
			{loading ? (
				<h3>Loading ....</h3>
			) : error ? (
				<h3>{error}</h3>
			) : (
				articles && (
					<section>
						{articles.map(article => (
							<SingleArticle key={article.id} article={article} />
						))}
					</section>
				)
			)}
		</article>
	)
}
export default Home
