
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css'

import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage';
import { MovieCast } from './components/MovieCast/MovieCast';
import { MovieReviews } from './components/MovieReviews/MovieReviews';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';




function App() {


  return (
		<div className={css.container}>
			<Navigation />
			<Suspense fallback={<div>Loading...</div>}>

			<Routes>

				<Route path='/' element={<HomePage />} />
				
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:movieId' element={<MovieDetailsPage />} >
				  <Route path='credits' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
				<Route path='*' element={<NotFoundPage />} />

				</Routes>
			</Suspense>

		</div>
  )
}

export default App
