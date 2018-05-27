import React from 'react';
import Menu from './Menu';
const MenuList = props => {
  return <div>{props.menus.map((menu, index) => <Menu key={index} menu={menu} />)}</div>;
};

export default MenuList;
