import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  navIcon() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  render() {
    // Only render the log out button if we are logged in
    let logOut;
    let logIn;
    let dashboard;
    let register;
    if (this.props.loggedIn) {
      logOut = (
        <a className="right" href="/" onClick={() => this.logOut()}>
          Log out
        </a>
      );
      dashboard = (
        <Link className="right" to="/dashboard">
          Dashboard
        </Link>
      );
    }
    if (!this.props.loggedIn) {
      logIn = (
        <Link className="right" to="/login">
          Login
        </Link>
      );
      register = (
        <Link className="right" to="/register">
          Register
        </Link>
      );
    }
    return (
      <div className="topnav" id="myTopnav">
        <Link className="active" to="/">uh-SIGN-ment</Link>
        {logIn}
        {register}
        {logOut}
        {dashboard}
        
        <a 
          className="icon"
          onClick={() => this.navIcon()}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
