import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Movies = ({title, year, genre, poster}) => {
  return (
      <li className="moviesCard">
      <Card style={{ width: '18rem', backgroundColor: '#3C4048'}}>
      <Card.Img className="movieImage" variant="top" src={poster} alt={title}/>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor: '#3C4048'}}><b>{title}</b></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3C4048'}}><i>{genre}</i></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: '#3C4048', color: '#EAEAEA'}}>{year}</ListGroup.Item>
      </ListGroup>
      </Card>
      </li>
    
  );
}

export default Movies;