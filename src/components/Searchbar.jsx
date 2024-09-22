import React, { useState } from 'react';

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = e => {
    setQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleSearch = () => {
    if (query) {
      onSearch(query);
      setQuery('');
      setIsDropdownOpen(false);
    }
  };

  const handleCitySelect = city => {
    setQuery(city);
    onSearch(city);
    setIsDropdownOpen(false);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className='search-bar'>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search for a city...'
        onFocus={() => setIsDropdownOpen(true)}
      />
      <button onClick={handleSearch}>Search</button>

      {isDropdownOpen && (
        <div className='dropdown'>
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <div
                key={index}
                className='dropdown-item'
                onClick={() => handleCitySelect(city)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = '#f0f0f0')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = 'white')
                }
              >
                {city}
              </div>
            ))
          ) : (
            <div className='dropdown-item'>No cities found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
