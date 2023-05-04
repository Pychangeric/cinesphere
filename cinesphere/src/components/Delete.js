import React, { useState } from 'react';
import axios from 'axios';


const Delete = ({ history }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/movies/${title}`);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Delete Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
