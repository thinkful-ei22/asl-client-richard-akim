import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "./login-form";

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Learn Sign!!</h2>
      <LoginForm />
      <Link to="/register">Go to Registration</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LoginPage);
