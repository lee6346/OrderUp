import React from 'react';

const TextInput = props => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      onChange={e => props.handleInputChange(e.target.value)}
    />
  );
};

export default TextInput;
