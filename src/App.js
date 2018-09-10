import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { LandingPage } from './components/landing/landing-page';
import LoginPage from './components/login/login-page';
import './App.css';
import RegistrationPage from './components/registration/registration-page';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route exact path="/register" component={RegistrationPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
