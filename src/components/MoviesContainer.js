import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Movies from "./Movies";


const MoviesContainer = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/lgbtqMovies')
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
  }, []);

  return (
    <Container fluid>
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
    </Container>
  );
}

export default MoviesContainer;