import React from 'react';
import { Link } from 'react-router-dom';

const PublicLinks = props => {
  return (
    <div className="collapse navbar-collapse" id="navHeaderContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/help" className="navbar-brand text-muted">
            Help
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="navbar-brand text-muted">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default PublicLinks;
