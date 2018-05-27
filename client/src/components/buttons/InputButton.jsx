import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const InputButton = ButtonComponent => {
  return props => (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder={props.placeholder} name={props.name} />
      <div className="input-group-append">
        <ButtonComponent {...props} />
      </div>
    </div>
  );
};

export default InputButton;
