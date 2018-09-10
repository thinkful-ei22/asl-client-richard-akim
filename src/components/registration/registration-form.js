import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const usernameLength = length({max: 15});
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    const {username, name, password} = values;
    const user = {username, name, password};
    return this.props
      .dispatch(registerUser(user));
    //   .then(() => this.props.dispatch(login(username, password)));
  }

  // validate(values) {
  //   const errors = {};
  //   if(!values.username) {
  //     errors.username = 'Required';
  //   } else if (values.username.length > 15) {
  //     errors.username = 'Must be 15 characters or less';
  //   }

  //   if(!values.password) {
  //     errors.password = 'Required';
  //   } else if (values.password.length < 10) {
  //     errors.password = 'Must be 10 characters or more';
  //   }

  //   if(!values.name) {
  //     errors.name = 'Required';
  //   }

  //   return errors;
  // }

  // renderField({
  //   input,
  //   label,
  //   type,
  //   meta: { touched, error, warning }
  // }) {
  //   return (
  //     <div>
  //       <label>{label}</label>
  //       <div>
  //         <input {...input} placeholder={label} type={type} />
  //         {touched &&
  //           ((error && <span>{error}</span>) ||
  //             (warning && <span>{warning}</span>))}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    

    return (
      <form
        onSubmit={handleSubmit(values => 
          this.onSubmit(values))}
      >
        {/* <label htmlFor="name">Name</label>
        <Field name="name" 
          component={this.renderField}
          type="text" 
        />
        <label htmlFor="username">Username</label>
        <Field component={this.renderField} type="text" name="username" label="Username" />
        <label htmlFor="password">Password</label>
        <Field component={this.renderField}  type="text" name="password" />
        <label htmlFor="name">Confrim Password</label>
        <Field component={this.renderField} type="text" name="passwordConfirm" /> */}
        <label htmlFor="name">Name</label>
        <Field 
          name="name" 
          component={Input}
          type="text"
          validate={[required]} 
        />

        <label htmlFor="username">Username</label>
        <Field 
          component={Input} 
          type="text" 
          name="username" 
          validate={[required, nonEmpty, isTrimmed, usernameLength]}
        />

        <label htmlFor="password">Password</label>
        <Field 
          component={Input}  
          type="text" 
          name="password" 
          validate={[required, passwordLength, isTrimmed]}
        />

        <label htmlFor="name">Confrim Password</label>
        <Field 
          component={Input} 
          type="text" 
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]} 
        />

        <button type="button" disabled={pristine || submitting} onClick={reset}>Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

