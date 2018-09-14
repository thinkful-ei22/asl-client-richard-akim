import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";
import { Link } from "react-router-dom";

class SideDrawer extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOut;
    let logIn;
    let dashboard;
    let drawerClasses =
      "side-drawer" +
      " " +
      `${this.props.mobile.hamburgerMenuOpen ? "show" : ""}`;
    if (this.props.loggedIn) {
      logOut = (
        <a className="side-drawer-link" href="/" onClick={() => this.logOut()}>
          Log out
        </a>
      );
      dashboard = (
        <Link className="side-drawer-link" to="/dashboard">
          Dashboard
        </Link>
      );
    }
    if (!this.props.loggedIn) {
      logIn = (
        <Link to="/login" id="side-drawer-login-link">
          Login
        </Link>
      );
    }
    return (
      <div className={drawerClasses}>
        <nav className="side-drawer-nav">
          <li>{logIn}</li>
          <li>{dashboard}</li>
          <li>{logOut}</li>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  mobile: state.mobile
});

export default connect(mapStateToProps)(SideDrawer);
