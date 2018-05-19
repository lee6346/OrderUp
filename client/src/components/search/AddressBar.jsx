import React from 'react';

const AddressBar = props => {
  console.log('address bar: ' + props.input);
  return (
    <div className={props.className}>
      <input type="text" placeholder="Address" className="form-control" {...props.input} />
    </div>
  );
};

export default AddressBar;
