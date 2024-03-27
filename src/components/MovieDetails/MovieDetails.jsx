import { Link, Outlet } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const MovieDetails = ({ details }) => {
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';
  const { genres, title, release_date, overview, poster_path, vote_average } =
    details;
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <section>
      <Link to={backLink}>&#60;- Go back</Link>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={300}
        alt={title}
      />
      <h1>
        {title} ({release_date.slice(0, 4)})
      </h1>
      <p>User score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
