import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { updateUser } from '../actions';

class UserProfile extends Component {
  handleFormSubmit({ email, name }) {
    this.props.updateUser({ email, name });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <fieldset className={className}>
        <label>{field.label}</label>
        <input type={field.type} className="form-control" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </fieldset>
    );
  }
  renderAlert() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.error}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field label="Email" name="email" type="text" component={this.renderField} />
        <Field label="Name" name="name" type="text" component={this.renderField} />
        {this.renderAlert()}

        <button action="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default reduxForm({
  form: 'profile',
})(connect(mapStateToProps, { updateUser })(UserProfile));
