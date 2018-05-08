import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { uploadPicture } from '../actions/profile';
class MenuImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }
  onFileChange(event) {
    this.setState({
      file: event.target.files[0],
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handled');
    const { uploadPicture, history } = this.props;
    uploadPicture(this.state.file, history);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h5>Add an image</h5>
          <input onChange={this.onFileChange.bind(this)} type="file" accept="image/*" />
          <button action="submit">Add Image</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { uploadPicture })(withRouter(MenuImageUpload));
