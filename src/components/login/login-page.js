import React from "react";
import NavBar from "../navbar";
import { connect } from "react-redux";

import LoginForm from "./login-form";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  render() {
    return (
      <div>
        <NavBar links={[{ name: "Home", href: "http://localhost:3000/" }]} />
        <main>
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default connect(null)(LoginPage);
