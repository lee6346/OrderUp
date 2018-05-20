import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createAccount } from '../../actions/account';
import { emailValidator, passwordValidator } from '../../utils/validators';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  handleFormSubmit({ email, name, password }) {
    const { history } = this.props;
    this.props.createAccount({ email, name, password }, history);
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
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
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
        <Field label="Password" name="password" type="text" component={this.renderField} />
        <Field label="Re-Password" name="repassword" type="text" component={this.renderField} />
        {this.renderAlert()}

        <button action="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email || !emailValidator(values.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!values.password || !passwordValidator(values.password)) {
    errors.password = 'Enter a valid password';
  }
  if (!values.name) {
    errors.name = 'Name cannot be empty';
  }
  if (!values.repassword || values.repassword !== values.password) {
    errors.repassword = "Password doesn't match";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.account.error,
  };
}

export default reduxForm({
  validate,
  form: 'registration',
})(connect(mapStateToProps, { createAccount })(withRouter(Register)));
