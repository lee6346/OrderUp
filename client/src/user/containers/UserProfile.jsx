import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { ClickableImage } from '../../components/images';
class UserProfile extends Component {
  expandImage() {}

  render() {
    const { name, email, imageUrl } = this.props.user;
    return (
      <div>
        <ClickableImage handleImageClick={this.expandImage.bind(this)} imageUrl={imageUrl} height={300} width={300} />
        <UserInfo name={name} email={email} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(UserProfile);
