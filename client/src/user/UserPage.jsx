import React from 'react';
import AccountNav from './containers/AccountNav';
import AccountSettings from './containers/AccountSettings';
import UserProfile from './containers/UserProfile';

import { Switch, Route } from 'react-router-dom';
const UserPage = props => {
  console.log(localStorage.getItem('orderUpToken'));
  const { match } = props;
  return (
    <div className="row">
      <div className="col-md-3">
        <AccountNav />
      </div>
      <div className="col-md-9">
        <Switch>
          <Route exact path={match.path} component={UserProfile} />
          <Route exact path={`${match.path}/settings`} component={AccountSettings} />
        </Switch>
      </div>
    </div>
  );
};

export default UserPage;
