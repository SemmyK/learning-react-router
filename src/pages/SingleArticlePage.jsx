import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'

function SingleArticlePage() {
	const params = useParams()
	const navigate = useNavigate()
	const {
		data: article,
		loading,
		error,
	} = useFetch('http://localhost:3000/articles/' + params.id)

	useEffect(() => {
		if (error) {
			setTimeout(() => navigate('/'), 2000)
		}
	}, [error, navigate])

	return (
		<article className='card'>
			{loading ? (
				<h3>Loading ....</h3>
			) : error ? (
				<h3>{error}</h3>
			) : (
				article && (
					<section>
						<h2>{article.title}</h2>
						<p>By: {article.author}</p>
						<p>{article.body}</p>
						<Link to='/'>Go Back to home page</Link>
					</section>
				)
			)}
		</article>
	)
}
export default SingleArticlePage
