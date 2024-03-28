const Cast = ({ cast }) => {
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <section>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => {
            const { id, name, profile_path, character } = actor;
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="poster"
                />
                <h4>{name}</h4>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </section>
  );
};

export default Cast;
