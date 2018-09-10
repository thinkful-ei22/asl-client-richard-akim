import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import { LandingPage } from "./components/landing/landing-page";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
