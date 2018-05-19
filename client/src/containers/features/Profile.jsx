import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ProfilePicture from '../../components/account/ProfilePicture';
import FileUpload from '../forms/FileUpload';

class Profile extends Component {
  renderImage() {
    const { imageUrl } = this.props.account;
    if (imageUrl) {
      return <ProfilePicture imageUrl={imageUrl} />;
    }
    return <FontAwesomeIcon icon="user" size="lg" />;
  }
  render() {
    return (
      <div>
        {this.renderImage()}
        <FileUpload />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
  };
}

export default connect(mapStateToProps)(Profile);
