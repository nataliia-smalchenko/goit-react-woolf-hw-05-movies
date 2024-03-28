import { getTrendingMoviesApi } from 'api/movies';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Error from 'components/Error/Error';

import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTrendingMoviesApi();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <section className={`container ${css.section}`}>
      <h1 className={css.title}>Trending today</h1>
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error !== null && <Error message={error.message} />}
    </section>
  );
};

export default HomePage;
