// Sidebar.js

import React from 'react';
import Categories from './Categories';
import Search from './Search';

function Sidebar() {
  return (
    <div className="sidebar">
      <Search />
      <Categories />
    </div>
  );
}

export default Sidebar;
