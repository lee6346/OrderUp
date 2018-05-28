import React from 'react';
import { IconLink } from '../../components/links';
const style = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '10px 25px',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid transparent',
  textDecoration: 'none',
  fontSize: '1.5vw',
};
const GoogleAuthLink = props => {
  return <IconLink icon={['fab', 'google-plus']} text="Google" style={style} href="/auth/google" />;
};

export default GoogleAuthLink;
