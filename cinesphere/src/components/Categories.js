import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Categories.css';

const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost:3000/movies');
      setMovies(response.data);
      const genres = [...new Set(response.data.map(movie => movie.genre))];
      setGenreOptions(genres);
    };

    fetchMovies();
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const groupedGenres = () => {
    return genreOptions.reduce((groups, genre) => {
      const firstLetter = genre[0];
      groups[firstLetter] = groups[firstLetter] || [];
      groups[firstLetter].push(genre);
      return groups;
    }, {});
  }

  const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
  const groupedGenreOptions = groupedGenres();

  return (
    <div>
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {selectedGenre ? selectedGenre : 'Select Genre'}
      </button>
      <div className="dropdown-menu">
        {Object.entries(groupedGenreOptions).map(([letter, genres]) => (
          <div className="dropdown-item" key={letter}>
            <div className="dropdown-header">{letter}</div>
            {genres.map(genre => (
              <button className="dropdown-item" type="button" key={genre} onClick={() => handleGenreChange(genre)}>{genre}</button>
            ))}
          </div>
        ))}
      </div>
      <div className="row">
    
        {filteredMovies.map((movie, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
            <div className="card-body">
                <h1 className="card-title">{movie.title}</h1>
                <p className="card-text">{movie.description}</p>
                <img src={movie.image} alt={movie.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Categories;
