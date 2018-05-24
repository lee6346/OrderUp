import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layouts/Header';
import Home from './layouts/Home';
import Public from './layouts/Public';
import Registration from './layouts/Registration';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Public} />
            <Route exact path="/authentication" component={Registration} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
