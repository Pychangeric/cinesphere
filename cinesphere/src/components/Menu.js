import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Menu</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <h2>Menu</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
        <button onClick={handleCloseModal}>Close Menu</button>
      </Modal>
    </div>
  );
};

export default Menu;
