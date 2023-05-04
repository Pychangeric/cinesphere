import React, { useState } from 'react';

const Favourite = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      </button>
      <span>{isFavourite ? 'Favourited!' : ''}</span>
    </div>
  );
};

export default Favourite;
