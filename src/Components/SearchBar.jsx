import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
<div className="search-bar">
  <input
    type="text"
    placeholder="Search contacts..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className=" form-control"
  />
  <button onClick={handleSearch} className="search-button">
    Search
  </button>
</div>

  );
}

export default SearchBar;
