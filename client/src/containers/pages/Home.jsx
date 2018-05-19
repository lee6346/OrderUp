import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCurrentCoordinates } from '../../actions/geocoordinates';
import { fetchUser } from '../../actions/account';
import Main from './Main';
import Account from './Account';
import RequireAuth from '../wrappers/RequireAuth';

class Home extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.getCurrentCoordinates();
      this.props.fetchUser();
    }
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path="/home/account" component={Account} />
        <Route exact path={match.path} component={Main} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.account.authenticated };
}
export default connect(mapStateToProps, { getCurrentCoordinates, fetchUser })(Home);
