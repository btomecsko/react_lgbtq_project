import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


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
    <div className="moviesContainer">
      <Card.Header className="fs-2"><b>Directory</b></Card.Header>
      <Form className="d-flex">
        <Form.Control className="prompt" value={searchTerm} onChange={handleChange} placeholder="Search for Movie Title" />
        <i className="search icon" />
      </Form>
      <div>
        <ul className="movieList">
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
    </div>
  );
}

export default MoviesContainer;