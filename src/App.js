import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import MoviesContainer from "./components/MoviesContainer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/movies" element={<MoviesContainer/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
      </Routes>
    
    </div>
  );
}

export default App;
