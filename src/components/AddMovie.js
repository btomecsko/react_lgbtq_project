import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const AddMovie = ({movies, setMovies}) => {

  const navigate = useNavigate();
  const [form, setForm] = useState({});
  
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/lgbtqMovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setMovies([data, ...movies]));
      navigate("/movies")
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control type="text" name="title" placeholder="LGBTQ Movie Title" onChange={handleChange}/>
        </Col>
        <Col>
          <Form.Control type="text" name="release" placeholder="Release Year" onChange={handleChange}/>
        </Col>
        <Col>
          <Form.Control type="text" name="genre" placeholder="Genre" onChange={handleChange}/>
        </Col>
        <Col> 
          <Form.Control type="url" name="imageUrl" placeholder="Movie Poster" onChange={handleChange}/>
        </Col>
        <Col>
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddMovie;