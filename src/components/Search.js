import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:3000/movies');
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  const groupMoviesByGenre = (movies) => {
    const groupedMovies = {};

    movies.forEach(movie => {
      const genre = movie.genre;
      if (!groupedMovies[genre]) {
        groupedMovies[genre] = [];
      }
      groupedMovies[genre].push(movie);
    });
    return groupedMovies;
  };
  // Removed the extra brace from here

  const handlePlayTrailer = (trailerUrl) => {
    window.open(trailerUrl, '_blank');
  };

  const renderMoviesByGenre = (groupedMovies) => {
    return Object.keys(groupedMovies).map((genre, index) => (
      <div key={index} className="genre-container">
        <h1 className="genre-title">{genre}</h1>
        <div className="card-container">
          {groupedMovies[genre].map((movie, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <button onClick={() => handlePlayTrailer(movie.trailer)}>Play Trailer</button>
                <img src={movie.image} alt={movie.title} />
                <p className="card-text">{movie.description}</p>
                <p className="card-text">{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const groupedMovies = groupMoviesByGenre(movies);
  const renderedMoviesByGenre = renderMoviesByGenre(groupedMovies);

  return (
    <div className="container">
      {renderedMoviesByGenre}
    </div>
  );
};

export default Home;