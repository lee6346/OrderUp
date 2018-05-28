import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import GoogleAuthLink from '../components/GoogleAuthLink';
import { login, googleAuth } from '../actions';
import { emailValid, passwordValid } from '../helpers';

class Login extends Component {
  handleFormSubmit({ email, password }) {
    const { history } = this.props;
    this.props.login({ email, password }, history);
  }
  handleGoogleLogin() {
    const { history } = this.props;
    this.props.googleAuth(history);
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
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field label="Email" name="email" type="text" component={this.renderField} />
          <Field label="Password" name="password" type="text" component={this.renderField} />
          {this.renderAlert()}
          <div>
            <button action="submit" className="btn btn-primary form-control">
              Log in
            </button>
          </div>
          <div style={{ padding: '30px 0' }}>
            <GoogleAuthLink />
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email || !emailValid(values.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!values.password || !passwordValid(values.password)) {
    errors.password = 'Enter a valid password';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    error: state.auth.error,
  };
}

export default reduxForm({
  validate,
  form: 'login',
})(connect(mapStateToProps, { login, googleAuth })(withRouter(Login)));
