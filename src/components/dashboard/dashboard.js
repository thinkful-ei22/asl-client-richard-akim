import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import {Link} from 'react-router-dom';
import { resetQuestions } from '../../actions/questions';

export class Dashboard extends React.Component{
  handleReset(e) {
    e.preventDefault();
    this.props.dispatch(resetQuestions());
  }
  
  render() {
    return (
      <div>
        <h3>{`Welcome back to uh-SIGN-ment ${this.props.currentUser.name}`}</h3>
        <Link to='/question'>Question</Link>
        <div>
          <button onClick={(e) => this.handleReset(e)} className="question-btn">Reset Progress</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));