import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchMovieForm.module.css';

const SearchMovieForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
        value={query}
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovieForm;
