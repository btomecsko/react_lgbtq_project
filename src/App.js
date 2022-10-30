import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import MoviesContainer from "./components/MoviesContainer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App design">
      <Navbar />
      <Routes>
          <Route path="/movies" element={<MoviesContainer/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
          <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
