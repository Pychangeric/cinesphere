import React from "react";

function SearchResults({ data, search }) {
  const filteredData = data.filter((item) => {
    const name = item.name && item.name.toLowerCase(); // check if item.name exists before calling toLowerCase method
    return name.includes(search.toLowerCase());
  });

  return (
    <div>
      <h2>Search Results</h2>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
