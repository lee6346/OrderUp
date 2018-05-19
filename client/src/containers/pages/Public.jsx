import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../forms/Login';
import './pages.css';
import cater1 from '../../assets/images/public-cater1.jpg';
import cater2 from '../../assets/images/public-cater2.jpg';

class Public extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.history.replace('/home');
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div id="caterSet1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#caterSet1" data-slide-to="0" className="active" />
                  <li data-target="#caterSet1" data-slide-to="1" />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={cater1} className="d-block image-fluid fixed-image" alt="blah1" />
                  </div>
                  <div className="carousel-item">
                    <img src={cater2} className="d-block image-fluid fixed-image" alt="blah2" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#caterSet1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" area-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#caterSet1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" area-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div>
                <Login />
              </div>
              <div>
                <Link className="centered-content" to="/authentication">
                  No Account? Sign Up
                </Link>
                <Link className="centered-content" to="/reset">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.account.authenticated,
  };
}

export default connect(mapStateToProps)(Public);
