import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const IconLink = FontIconComponent => {
  return props => (
    <a className={props.className} style={props.style} href={props.href}>
      <FontIconComponent icon={props.icon} /> {props.text}
    </a>
  );
};

export default IconLink(FontAwesomeIcon);
