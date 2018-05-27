import React from 'react';
import { InputButton, IconButton } from '../../components/buttons';
const AddressInput = props => (
  <IconButton icon="search" type={props.type} className="btn" text="Search" handleButtonClick={() => {}} />
);

export default InputButton(AddressInput);
