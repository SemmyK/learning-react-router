import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => navigate('/'), 3000)
	}, [navigate])
	return (
		<article>
			<h2>Page Not Found</h2>
			<section>
				You tried to reach page that does not exist, you will redirected to home
				page...
			</section>
		</article>
	)
}
export default PageNotFound
