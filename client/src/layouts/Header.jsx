import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { logout } from '../auth/actions';

class Header extends Component {
  handleLogout() {
    const { history } = this.props;
    this.props.logout(history);
  }

  renderContent() {
    if (this.props.authenticated) {
      return (
        <div className="collapse navbar-collapse" id="navHeaderContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown">
                <FontAwesomeIcon icon="user" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="/home/account" className="dropdown-item">
                  Account
                </Link>

                <div className="dropdown-divider" />
                <a className="dropdown-item" onClick={this.handleLogout.bind(this)}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      );
    }
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
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link to="/" className="navbar-brand">
          LEGUME
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navHeaderContent">
          <span className="navbar-toggler-icon" />
        </button>
        {this.renderContent()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}
export default connect(mapStateToProps, { logout })(withRouter(Header));
