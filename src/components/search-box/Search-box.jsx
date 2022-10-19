import React from 'react';

function SearchBox({ handleChange, placeholder, className }) {
  return (
    <div>
      <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
