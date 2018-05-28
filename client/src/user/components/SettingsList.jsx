import React from 'react';
import { Link } from 'react-router-dom';
const SettingsList = props => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/home/account">Profile</Link>
        </li>
        <li className="list-group-item">
          <Link to="/home/account/settings">Account Settings</Link>
        </li>
        <li className="list-group-item">
          <Link to="/home/account/orders">Manage Orders</Link>
        </li>
        <li className="list-group-item">
          <Link to="/home/account/menus">Manage Menus</Link>
        </li>
        <li className="list-group-item">
          <Link to="/home/account/following">Following</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsList;
