import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Cats'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search cats'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;