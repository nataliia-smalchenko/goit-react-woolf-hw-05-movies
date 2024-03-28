import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './Header/Header';
import Loader from './Loader/Loader';

import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from '../pages/CastPage/CastPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <CastPage />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <ReviewsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
