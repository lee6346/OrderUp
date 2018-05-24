import React from 'react';

const PaginateButtons = props => {
  return (
    <div className="">
      <button
        type="button"
        className={props.className}
        onClick={() => {
          props.handleButtonClick(-1);
        }}
      >
        &laquo;
      </button>
      {`${props.currentPage} of ${props.totalPages}`}
      <button type="button" className={props.className} onClick={() => props.handleButtonClick(1)}>
        &raquo;
      </button>
    </div>
  );
};

export default PaginateButtons;
