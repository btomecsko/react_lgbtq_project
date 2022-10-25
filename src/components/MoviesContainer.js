import Movies from "./Movies";

const MoviesContainer = ({movies}) => {



  return (
    <ul className="cards">
      {movies.map(movie => (
        <Movies
        key={movie.id}
        title={movie.title}
        year={movie.release}
        genre={movie.genre}
        poster={movie.imageUrl}
        />
      ))}
    </ul>
  );
}

export default MoviesContainer;