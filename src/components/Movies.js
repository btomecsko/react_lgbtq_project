import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Movies = ({title, year, genre, poster}) => {
  return (
      <li className="moviesCard">
      <Card style={{ width: '18rem' }}>
      <Card.Img className="movieImage" variant="top" src={poster} alt={title}/>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>{title}</b></ListGroup.Item>
        <ListGroup.Item><i>{genre}</i></ListGroup.Item>
        <ListGroup.Item>{year}</ListGroup.Item>
      </ListGroup>
      </Card>
      </li>
    
  );
}

export default Movies;