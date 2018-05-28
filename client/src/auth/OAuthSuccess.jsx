import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSuccess } from './actions';
class OAuthSuccess extends Component {
  componentDidMount() {
    localStorage.setItem('orderUpToken', this.props.match.params.id);
    this.props.authSuccess();
    this.props.history.replace('/home');
  }
  render() {
    console.log(this.props.match);
    return <div>Waiting...</div>;
  }
}

export default connect(null, { authSuccess })(OAuthSuccess);
