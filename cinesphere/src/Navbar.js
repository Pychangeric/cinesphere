import React, { useState } from 'react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState(null);

  const handleSearch = () => {
    fetch(`http://localhost:3000/movies?title=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setMovie(data[0]);
        } else {
          setMovie(null);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {movie ? (
        <div className="movie">
          <h2>{movie.title}</h2>
          <p>{movie.trailer}</p>
          <img src={movie.image} alt={movie.title} />
         
        </div>
      ) : (
        <p></p>
      )}
    </nav>
  );
}

export default Navbar;
