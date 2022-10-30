import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Enter LGBTQ Movie Title:</Form.Label>
        <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter the Release Year:</Form.Label>
        <Form.Control type="text" name="release" placeholder="Release Year" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter the Genre:</Form.Label>
        <Form.Control type="text" name="genre" placeholder="Genre" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Image URL:</Form.Label>
        <Form.Control type="url" name="imageUrl" placeholder="Movie Poster" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
}

export default AddMovie;