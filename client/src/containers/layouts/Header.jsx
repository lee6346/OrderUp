import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';

const PublicNavItems = () => {
  return (
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
  );
};

const PrivateNavItems = ({}) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/help" className="navbar-brand">
          Help
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="navbar-brand">
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

class Header extends Component {
  handleLogout() {
    const { history } = this.props;
    this.props.logout(history);
  }

  renderContent() {
    if (this.props.authenticated) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={this.handleLogout.bind(this)} className="navbar-brand">
              Log Out
            </button>
          </li>
        </ul>
      );
    }
    return <PublicNavItems />;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          LEGUME
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navHeaderContent"
          aria-controls="navHeaderContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navHeaderContent">
          {this.renderContent()}
        </div>
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
