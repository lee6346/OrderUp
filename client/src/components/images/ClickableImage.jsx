import React from 'react';

const ClickableImage = props => (
  <div className={props.className} onClick={props.handleImageClick}>
    <img src={props.imageUrl} height={props.height} width={props.width} alt="expandable" />
  </div>
);

export default ClickableImage;
