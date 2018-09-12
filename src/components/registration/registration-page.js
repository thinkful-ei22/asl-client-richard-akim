import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import RegistrationForm from "./registration-form";

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Register to learn Sign!!</h2>
      <RegistrationForm />
      <Link to="/login">Back to login</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(RegistrationPage);
