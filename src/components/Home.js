import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Favourite from './Favourite';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
  }

  const handlePlaymovie = (movieUrl) => {
    window.open(movieUrl, '_blank');
  };

  const handlePlayTrailer = (trailerUrl) => {
    window.open(trailerUrl, '_blank');
  };


  const handleLike = (movie) => {
    const updatedMovies = movies.map(m => {
      if (m.id === movie.id) {
        return { ...m, liked: !m.liked };
      } else {
        return m;
      }
    });
    setMovies(updatedMovies);
  };

  const handleFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const handleDelete = async (movie) => {
    try {
      await axios.delete(`http://localhost:3000/movies/${movie.id}`);
      setMovies(movies.filter(m => m.id !== movie.id));
    } catch (error) {
      console.error(error);
    }
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
                <img src={movie.image} alt={movie.title} />
                <p className="card-text">{movie.description}</p>
                <button
                  className={`btn-like ${movie.liked ? 'liked' : ''}`}
                  onClick={() => handleLike(movie)}>
                  Like
                </button>
                <button
                  className="btn-favourite"
                  onClick={() => handleFavourite(movie)}>
                  Favourite
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(movie)}>
                  Delete
                </button>
                <button
                  className="btn-play-trailer"
                  onClick={() => handlePlayTrailer(movie.trailer)}>
                  Play Trailer
                </button>
                <button
                  className="btn-play-trailer"
                  onClick={() => handlePlaymovie(movie.movie)}>
                  play movie
                </button>
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
      <Favourite favourites={favourites} />
    </div>
  );
};

export default Home;
