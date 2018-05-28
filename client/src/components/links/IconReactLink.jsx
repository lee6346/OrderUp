import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const IconReactLink = FontIconComponent => {
  return props => (
    <Link to={props.to} className={props.className} style={props.style}>
      <FontIconComponent icon={props.icon} /> {props.text}
    </Link>
  );
};

export default IconReactLink(FontAwesomeIcon);
