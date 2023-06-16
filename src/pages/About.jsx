import { Routes, Route } from 'react-router-dom'

import Nested from '../components/Nested'

function About() {
	return (
		<article className='card'>
			<h2>About</h2>
			<section>
				I love cupcake chocolate bar biscuit powder danish gummies jelly beans
				caramels. Soufflé marzipan shortbread tiramisu tootsie roll halvah
				muffin. I love candy canes liquorice pastry biscuit brownie pie I love
				shortbread. Sweet roll tiramisu fruitcake gingerbread candy canes. Tart
				toffee fruitcake topping I love chocolate cake cupcake chupa chups.
				Chocolate cake candy caramels liquorice pastry carrot cake. Chupa chups
				pie muffin jelly beans bear claw candy canes dragée shortbread oat cake.
				I love lollipop cheesecake carrot cake jujubes I love gummies jelly-o
				cotton candy. Cake chocolate cake donut I love oat cake cupcake.
			</section>

			{/* nested Routes in components */}
			<Routes>
				<Route path='nested' element={<Nested />} />
			</Routes>
		</article>
	)
}
export default About
