import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/account';
import CompanyLogo from '../../components/header/CompanyLogo';
import PublicLinks from '../../components/header/PublicLinks';
import HomeLinks from '../../components/header/HomeLinks';

class Header extends Component {
  handleLogout() {
    const { history } = this.props;
    this.props.logout(history);
  }

  renderContent() {
    if (this.props.authenticated) {
      return <HomeLinks onLogoutClick={this.handleLogout.bind(this)} />;
    }
    return <PublicLinks />;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <CompanyLogo />

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
        {this.renderContent()}
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.account.authenticated,
  };
}
export default connect(mapStateToProps, { logout })(withRouter(Header));
