import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFiles } from '../../actions/account';
class FileUpload extends Component {
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
    this.props.uploadFiles(this.state.file);
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

export default connect(null, { uploadFiles })(FileUpload);
