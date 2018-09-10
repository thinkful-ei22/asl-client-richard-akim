import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { LandingPage } from "./components/landing/landing-page";
import LoginPage from "./components/login/login-page";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} exact />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
