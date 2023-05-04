import React, { useState } from 'react';
import axios from 'axios';
import './Add.css'

const Add = ({ history }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMovie = { title, genre, description, image, trailer };
    try {
      await axios.post('http://localhost:3000/movies', newMovie);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <label className="label">Title:</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="input" />

        <label className="label">Genre:</label>
        <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} className="input" />

        <label className="label">Description:</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} className="input" />

        <label className="label">Image URL:</label>
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} className="input" />

        <label className="label">Trailer URL:</label>
        <input type="text" value={trailer} onChange={(event) => setTrailer(event.target.value)} className="input" />

        <button type="submit" className="btn">Add</button>
      </form>
    </div>
  );
};

export default Add;
