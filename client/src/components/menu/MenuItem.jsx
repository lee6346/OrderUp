import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
const MenuItem = props => {
  const { chef, address, menuName, category, price, description } = props.menu;
  return (
    <div className="row">
      <div className="col-md-4">
        <FontAwesomeIcon icon="user-alt" size="lg" />
        <div>Chef: {chef}</div>
        <div>Location: {address}</div>
      </div>
      <div className="col-md-6">
        <div>Menu: {menuName}</div>
        <div>Category: {category}</div>
        <div>Price: ${price}</div>
        <div>Description: {description}</div>
      </div>
    </div>
  );
};

export default MenuItem;
