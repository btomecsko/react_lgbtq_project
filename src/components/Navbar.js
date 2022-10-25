import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">LGBTQ Entertainment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/movies' className='movies'>LGBTQ Movies</Nav.Link>
            <Nav.Link href='/addmovie'>Add New Movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;