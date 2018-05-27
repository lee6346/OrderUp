import React from 'react';
import styles from './Menu.css';
const leftAlign = {
  textAlign: 'left',
};

const rightAlign = {
  textAlign: 'right',
};

const menuTitleStyle = {
  ...leftAlign,
  fontSize: '2vw',
};

const priceStyle = {
  ...rightAlign,
  fontSize: '1.2vw',
};

const distanceStyle = {
  ...rightAlign,
  fontSize: '1vw',
};

const ratingsStyle = {
  ...rightAlign,
  fontSize: '1vw',
};

const menuStyle = {
  padding: '10px',
  borderTop: '1px solid #ddd',
};

const menuRow = {
  paddingBottom: '10px',
};

const Menu = props => {
  const { menuName, price, description, ratings, distance } = props.menu;
  return (
    <div style={menuStyle}>
      <div style={menuRow} className="row">
        <span className="col-md-8" style={menuTitleStyle}>
          {menuName}
        </span>
        <span className="col-md-4" style={priceStyle}>
          ${price}
        </span>
      </div>
      <div style={menuRow} className="row">
        <div className="col-md-8" style={leftAlign}>
          {description}
        </div>
        <div className="col-md-4" style={rightAlign}>
          <div style={ratingsStyle}>{ratings ? ratings : 'No Ratings'}</div>
          <div style={distanceStyle}>{Number(distance).toFixed(1)} miles</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
