import React from "react";
import { login } from "../../actions/login";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }
  render() {
    return (
      <form>
        <label htmlFor="user">Username</label>
        <input type="text" name="username" id="username" ref={this.username} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" ref={this.password} />
        <br />

        <button
          type="submit"
          name="login"
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(
              login({ username: this.username, password: this.password })
            );
            console.log("Im a hateful little app");
          }}
        >
          Login
        </button>
      </form>
    );
  }
}
export default LoginForm;
