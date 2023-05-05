import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/add">Add</Link>
    </div>
  );
};

export default Navigation;
