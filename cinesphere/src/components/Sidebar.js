import React from 'react';
import Search from './Search';

function Sidebar() {
  return (
    <div className="sidebar">
      <Search />
      {/* Remove the Categories component usage */}
    </div>
  );
}

export default Sidebar;