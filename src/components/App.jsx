import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
