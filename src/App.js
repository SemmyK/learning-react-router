import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	NavLink,
	Navigate,
} from 'react-router-dom'
//style
import './App.css'
//components and pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import SingleArticlePage from './pages/SingleArticlePage'
import Nested from './components/Nested'

function App() {
	return (
		<BrowserRouter>
			<main className='App'>
				<nav>
					<Link to='/'>
						<h1>My Articles</h1>
					</Link>

					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* matching /about and allowing component About to have nested routes inside of About component */}
					<Route path='/about/*' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/articles/:id' element={<SingleArticlePage />} />
					{/*  redirect after 3 sec */}
					<Route path='*' element={<PageNotFound />} />
					{/* auto redirect */}
					<Route path='/redirect' element={<Navigate to='/' />} />
					{/* nested Routes in app component */}
					<Route path='/about/*' element={<About />}>
						<Route path='nested' element={<Nested />} />
					</Route>
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App
