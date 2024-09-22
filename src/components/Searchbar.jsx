import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search for a city...'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
