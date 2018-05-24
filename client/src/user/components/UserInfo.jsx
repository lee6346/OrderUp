import React from 'react';

const UserInfo = props => (
  <div>
    <ul>
      <li>{props.name}</li>
      <li>{props.email}</li>
      <li>Member since:</li>
    </ul>
  </div>
);

export default UserInfo;
