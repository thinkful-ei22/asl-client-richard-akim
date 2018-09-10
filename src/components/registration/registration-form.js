import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {registerUser} from '../../actions/users';

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
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" 
            component="input"
            type="text" 
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Field component="input" type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field component="input"  type="text" name="password" />
        </div>
        <div>
          <label htmlFor="name">Confrim Password</label>
          <Field component="input" type="text" name="passwordConfirm" />
        </div>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  validate: this.validate
})(RegistrationForm);

