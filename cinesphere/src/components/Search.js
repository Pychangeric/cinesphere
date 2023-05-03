import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;