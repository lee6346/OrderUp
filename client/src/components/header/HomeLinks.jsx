import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
const HomeLinks = props => {
  return (
    <div className="collapse navbar-collapse" id="navHeaderContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            area-expanded="false"
          >
            <FontAwesomeIcon icon="user" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="/home/account" className="dropdown-item">
              Account
            </Link>

            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item" onClick={() => props.onLogoutClick()}>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeLinks;
