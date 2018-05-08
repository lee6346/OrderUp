import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      console.log('mounted');
      if (!this.props.authenticated) {
        this.props.history.replace('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
    };
  }
  return connect(mapStateToProps)(Authentication);
}
