# Learning React Router 6

- with react-router-dom 6 word 'exact' for the paths in Routes, Links, and NavLinks is no more used, the default behavior of routes is to look for an exact match
- instead of Switch component wrap all Route components in Routes component:
```
<BrowserRouter>
	<Routes>
		<Route path='/' element={<Home />} />			
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
</BrowserRouter>
````

## Difference between react-router and react-router-dom explained:

[Article from Syncfusion](https://www.syncfusion.com/blogs/post/react-router-vs-react-router-dom.aspx)

## Link from react-router-dom

Creates anchor tag but does not cause reload of the page when clicked, it redirects without reloading the whole website

## NavLink from react-router-dom

Links in a navbar which adds class 'active' to a link/anchor tag which is active, when we are on a page that the NavLink represents. To make visible which one is active write a style for anchor tags with class active (a.active)

## Two ways of nesting routes

1. Inside of the App component define nesting and nested components routes

```
<Route path='/about/*' element={<About />}>
	<Route path='nested' element={<Nested />} />
</Route>
```

2. Inside of parent component (About) define nesting child component route (Nested)
- Define nesting in App component

### In the App component inside of Routes add

`	<Route path='/about/*' element={<About />} /> `

- Define nested component routes in parent component

### In the About component add

```
<Routes>
	<Route path='nested' element={<Nested />} />
</Routes>
```

## Redirects

There are two ways of doing redirect:

1. Auto redirect - using Navigate component - in App component where all routes are define add:
   `<Route path='*' element={<Navigate to='/' />} />`

- this will cause auto redirect if we go to any route that is not defined in Routes

2. Redirect after showing Not found Component for a few seconds - using useNavigate hook - in NotFoundPage component add code:

```
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => navigate('/'), 3000)
	}, [navigate])

```

- this will redirect after 3sec

## Get params from the URL

### Params - everyhing that comes after '/' in the url

Example: /articles/:id (id is parameter)

- use useParams hook to get params from url

`const params = useParams()` -- params.id will give the value of id param

or

` const { id } = useParams()` -- destructure the params obj and get just the value of id

  

## Get query params from URL

### Query params - everything that is after '?' in URL in a form of key-value pairs

Example: /articles?name=mario (name=mario is query parameter)

```
 const queryString = useLocation().search //gives back "name=mario"

  const queryParams = new URLSearchParams(queryString)

  const name = queryParams.get("name") //gives back "mario"
```
