import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';
import { emailValidator, passwordValidator } from '../../utils/validators';

class Login extends Component {
  handleFormSubmit({ email, password }) {
    const { history } = this.props;
    this.props.login({ email, password }, history);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    //const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <fieldset className="form-group">
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
        <Field label="Password" name="password" type="text" component={this.renderField} />
        {this.renderAlert()}
        <div>
          <button action="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
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
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default reduxForm({
  validate,
  form: 'login',
})(connect(mapStateToProps, { login })(withRouter(Login)));
