import React from "react";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


const Home = () => {



  return (
    <Container fluid>
      <div className="homeCard">
      <Card className="text-center">
        <Card.Header className="fs-2"><b>Queer Entertainment</b></Card.Header>
        <Card.Body>
          <Card.Text>
          Queer Entertainment provides resource with a list of LGBTQ movies. At the moment, the list is small, but growing. If you don't see an LGBTQ movie and would like to add one, please click Add Movie at the top. That will take you to a form to fill out and will post the movie.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </Container>

  );

}

export default Home;