import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Menu = props => {
  const { chef, address, menuName, category, price, description } = props.menu;
  return (
    <div className="row menu-style">
      <div className="col-md-4 menu-style">
        <FontAwesomeIcon icon="user-alt" size="lg" />
        <div>Chef: {chef}</div>
        <div>Location: {address}</div>
      </div>
      <div className="col-md-6 menu-style">
        <div>Menu: {menuName}</div>
        <div>Category: {category}</div>
        <div>Price: ${price}</div>
        <div>Description: {description}</div>
      </div>
    </div>
  );
};

export default Menu;
