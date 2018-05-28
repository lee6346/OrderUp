import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import SettingsList from '../components/SettingsList';

class AccountNav extends Component {
  expandImage() {}

  render() {
    const { name, email, imageUrl } = this.props.user;
    return (
      <div>
        <UserInfo name={name} imageUrl={imageUrl} />
        <SettingsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(AccountNav);
