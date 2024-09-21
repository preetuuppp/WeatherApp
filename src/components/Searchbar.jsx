import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
