import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to='/'>LGBTQ Entertainment</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/movies' className='movies'>LGBTQ Movies</Link>
            <Link to='/addmovie'>Add New Movie</Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;