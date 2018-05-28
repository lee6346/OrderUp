import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layouts/Header';
import Home from './layouts/Home';
import Public from './layouts/Public';
import Registration from './layouts/Registration';
import OAuthSuccess from './auth/OAuthSuccess';

const pageLayout = {
  paddingTop: '20px',
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={pageLayout}>
          <Switch>
            <Route exact path="/" component={Public} />
            <Route exact path="/authentication" component={Registration} />
            <Route path="/home" component={Home} />
            <Route path="/oauthsuccess/:id" component={OAuthSuccess} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
