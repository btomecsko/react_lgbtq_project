import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AddMovie = ({ movies, setMovies }) => {

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
    <Fragment>
    <Card.Header className="fs-2 moviesContainer"><b>Add New Movie</b></Card.Header>
    <Form onSubmit={handleSubmit} className="addMovie">
      <Form.Group className="mb-3">
        <Form.Label><i>Enter LGBTQ Movie Title</i></Form.Label>
        <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><i>Enter the Release Year</i></Form.Label>
        <Form.Control type="text" name="release" placeholder="Release Year" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><i>Enter the Genre</i></Form.Label>
        <Form.Control type="text" name="genre" placeholder="Genre" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><i>Enter Image URL</i></Form.Label>
        <Form.Control type="url" name="imageUrl" placeholder="Movie Poster" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
    </Fragment>
  );
}

export default AddMovie;