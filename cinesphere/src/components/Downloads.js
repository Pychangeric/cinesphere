// Downloads.js
import React from 'react';
import './Downloads.css';

const Downloads = ({ movieUrl, movieTitle }) => {
  return (
    <a
      href={movieUrl}
      download={`${movieTitle}.mp4`}
      target="_blank"
      rel="noreferrer"
      className="download-link"
    >
      <button type="button" className="download-button">
        Download Movie
      </button>
    </a>
  );
};

export default Downloads;
