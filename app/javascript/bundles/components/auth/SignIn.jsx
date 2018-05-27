import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions';


const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


class SignIn extends Component {
  // static propTypes = {
  //   email: React.PropTypes.string,
  //   password: React.PropTypes.string,
  //   handleSubmit: React.PropTypes.func,
  // };

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  render() {
    const { error, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            className="container">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <div>
          <button type="submit"
                  disabled={submitting}
                  className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin'
}, null, actions)(SignIn);
