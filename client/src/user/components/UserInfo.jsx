import React from 'react';
import avatar from '../../assets/images/avatar.jpg';

const userStyles = {
  textAlign: 'center',
};

const UserInfo = props => {
  const { name, imageUrl } = props;
  return (
    <div className="card">
      <img src={imageUrl ? imageUrl : avatar} className="card-img-top" />
      <div className="card-footer" style={userStyles}>
        {name}
      </div>
    </div>
  );
};

export default UserInfo;
