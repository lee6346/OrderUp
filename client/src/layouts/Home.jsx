import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useCurrentCoordinates } from '../cater-search/actions/coordinates';
import { fetchUser } from '../user/actions';
import MainPage from '../cater-search/MainPage';
import UserPage from '../user/UserPage';
import RequireAuth from '../auth/containers/RequireAuth';

class Home extends Component {
  componentDidMount() {
    this.props.useCurrentCoordinates();
    this.props.fetchUser();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/home/account" component={UserPage} />
          <Route exact path={match.path} component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { useCurrentCoordinates, fetchUser })(RequireAuth(Home));
