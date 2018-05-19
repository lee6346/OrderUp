import React, { Component } from 'react';
import Register from '../forms/Register';
import './pages.css';

class Authentication extends Component {
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

export default Authentication;
