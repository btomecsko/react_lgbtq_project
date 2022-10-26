import React, {useEffect, useState} from "react";
import MoviesContainer from "./MoviesContainer";
import AddMovie from "./AddMovie";

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
        <AddMovie movies={movies} setMovies={setMovies}/>
    </div>
    
  );

}

export default Home;