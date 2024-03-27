const Error = ({ message }) => {
  return (
    <section>
      <h2>Oops... Something went wrong. Please try again. </h2>
      <p>Error message: {message}</p>
    </section>
  );
};

export default Error;
