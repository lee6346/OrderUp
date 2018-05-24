import React from 'react';

const Select = props => {
  return (
    <select className={props.className} value={props.value} onChange={e => props.handleSelectChange(e.target.value)}>
      {props.items.map(item => (
        <option key={item.value} value={item.value}>
          {item.content}
        </option>
      ))}
    </select>
  );
};

export default Select;
