import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchMovieForm;
