import React from "react";
import {LinkContainer} from 'react-router-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Queer Entertainment</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to='/movies'>
            <Nav.Link className='movies'>LGBTQ Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/addmovie'>
            <Nav.Link >Add New Movie</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;