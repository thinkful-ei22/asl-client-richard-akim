import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../actions/users";
import { login } from "../../actions/auth";
import Input from "../input";
import { required, nonEmpty, matches, length, isTrimmed } from "../validators";
const usernameLength = length({ max: 15 });
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, name, password} = values;
    const user = {username, name, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form
        id="registration-form"
        onSubmit={handleSubmit(values => this.onSubmit(values))}
      >
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
        <button 
          type="submit" disabled={pristine || submitting}
          className="question-btn"
        >
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);
