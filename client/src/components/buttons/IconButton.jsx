import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const IconButton = FontIconComponent => {
  return props => (
    <button type={props.type} className={props.className} onClick={() => props.handleButtonClick()}>
      <FontIconComponent icon={props.icon} /> {props.text}
    </button>
  );
};

export default IconButton(FontAwesomeIcon);
