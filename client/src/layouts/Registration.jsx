import React, { Component } from 'react';
import Register from '../auth/containers/Register';
import './layouts.css';

class Registration extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg" />
            <div className="col-sm">
              <div>
                <Register />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Registration;
