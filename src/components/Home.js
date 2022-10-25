import React, {useEffect, useState} from "react";
import MoviesContainer from "./MoviesContainer";

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/lgbtqMovies')
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
  }, []);

  return (
    <div>
        <MoviesContainer movies={movies}/>
    </div>
    
  );

}

export default Home;