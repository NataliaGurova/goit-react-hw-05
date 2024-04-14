// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css'
import { Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage';
import { MovieCast } from './components/MovieCast/MovieCast';
import { MovieReviews } from './components/MovieReviews/MovieReviews';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
		<div className={css.container}>
			<Navigation />

			<Routes>

				<Route path='/' element={<HomePage />} />
				
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:movieId' element={<MovieDetailsPage />} >
				  <Route path='credits' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
				<Route path='*' element={<NotFoundPage />} />

			</Routes>

		</div>
  )
}

export default App
