import { Link } from 'react-router-dom'

function SingleArticle({ article }) {
	return (
		<section className='card'>
			<h3>{article.title}</h3>
			<p>By: {article.author}</p>
			<p>{article.body.slice(0, 50)}...</p>
			<Link to={`/articles/${article.id}`}>See more..</Link>
		</section>
	)
}
export default SingleArticle
