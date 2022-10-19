import React from 'react';
import './search-box.styles.css';

function SearchBox({ handleChange, placeholder, className }) {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
