import React from 'react';

const leftAlign = {
  'text-align': 'left',
};

const rightAlign = {
  'text-align': 'right',
};

const menuTitleStyle = {
  ...leftAlign,
  'font-size': '2vw',
};

const priceStyle = {
  ...rightAlign,
  'font-size': '1.2vw',
};

const distanceStyle = {
  ...rightAlign,
  'font-size': '1vw',
};

const ratingsStyle = {
  ...rightAlign,
  'font-size': '1vw',
};

const menuPadding = {
  padding: '10px',
};

const Menu = props => {
  const { menuName, price, description, ratings, distance } = props.menu;
  return (
    <div style={menuPadding}>
      <div className="row">
        <span className="col-md-8" style={menuTitleStyle}>
          {menuName}
        </span>
        <span className="col-md-4" style={priceStyle}>
          ${price}
        </span>
      </div>
      <div className="row">
        <div className="col-md-8" style={leftAlign}>
          {description}
        </div>
        <div className="col-md-4" style={rightAlign}>
          <div>
            <span style={ratingsStyle}>{ratings ? ratings : 'No Ratings'}</span>
          </div>
          <div>
            <span style={distanceStyle}>{Number(distance).toFixed(1)} miles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
