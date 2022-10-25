import React, {useEffect, useState} from "react";
import MoviesContainer from "./MoviesContainer";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/lgbtqMovies')
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
  }, []);

  const moviesToDisplay = movies.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <MoviesContainer movies={moviesToDisplay}/>
        <AddMovie movies={movies} setMovies={setMovies}/>
        <SearchBar search={search} onChangeSearch={setSearch} />
    </div>
    
  );

}

export default Home;