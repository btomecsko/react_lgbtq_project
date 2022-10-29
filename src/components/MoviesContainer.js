import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Movies from "./Movies";


const MoviesContainer = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetch('http://localhost:3001/lgbtqMovies')
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
  }, []);

  return (
    <Container fluid>
    <div>
    <input className="prompt" value={searchTerm} onChange={handleChange} />
        <i className="search icon" />
    </div>
    <div>
    <ul className="cards">
      {searchMovies.map(movie => (
        <Movies
        key={movie.id}
        title={movie.title}
        year={movie.release}
        genre={movie.genre}
        poster={movie.imageUrl}
        />
      ))}
    </ul>
    </div>
    </Container>
  );
}

export default MoviesContainer;