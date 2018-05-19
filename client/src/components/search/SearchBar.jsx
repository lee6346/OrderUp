import React from 'react';

const SearchBar = props => {
  return (
    <div className={props.className}>
      <input type="text" placeholder="Search" className="form-control" {...props.input} />
    </div>
  );
};

export default SearchBar;
