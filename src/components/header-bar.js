import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { Link } from "react-router-dom";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOut;
    let logIn;
    let dashboard;
    if (this.props.loggedIn) {
      logOut = (
        <a className="header-link" href="/" onClick={() => this.logOut()}>
          Log out
        </a>
      );
      dashboard = (
        <Link className="header-link" to="/dashboard">
          Dashboard
        </Link>
      );
    }
    if (!this.props.loggedIn) {
      logIn = (
        <Link to="/login" id="header-login-link">
          Login
        </Link>
      );
    }
    return (
      <header className="header-bar">
        <h1>
          <Link to="/">uh-SIGN-ment</Link>
        </h1>
        <ul className="header-right">
          <li>{logIn}</li>
          <li>{dashboard}</li>
          <li>{logOut}</li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
