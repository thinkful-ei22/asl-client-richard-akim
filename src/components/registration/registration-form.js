import React from 'react';
import {Field, reduxForm} from 'redux-form';

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    const {username, name, password} = values;
    const user = {username, name, password};
    // return this.props
    //   .dispatch(registerUser(user))
    //   .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values))}
      >
        <label htmlFor="name">Name</label>
        <Field name="name" 
          component="input" 
          type="text" 
        />
        <label htmlFor="username">Username</label>
        <Field component="input" type="text" name="username" />
        <label htmlFor="password">Password</label>
        <Field component="input" type="text" name="password" />
        <label htmlFor="name">Confrim Password</label>
        <Field component="input" type="text" name="passwordConfirm" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm);

