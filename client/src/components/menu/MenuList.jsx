import React, { Component } from 'react';
import MenuItem from './MenuItem';
const MenuList = props => {
  const { menus } = props;

  return <div>{menus.map((menu, index) => <MenuItem key={index} menu={menu} />)}</div>;
};

export default MenuList;
