import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/genre">Genre</NavLink>
    </div>
  );
};

export default NavBar;