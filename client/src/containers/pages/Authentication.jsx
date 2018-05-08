import React, { Component } from 'react';
import RegisterUser from '../forms/RegisterUser';
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
                <RegisterUser />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Authentication;
