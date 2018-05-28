import React from 'react';

const ClickableImage = props => (
  <div onClick={props.handleImageClick}>
    <img
      src={props.imageUrl}
      className={props.className}
      style={props.style}
      height={props.height}
      width={props.width}
    />
  </div>
);

export default ClickableImage;
