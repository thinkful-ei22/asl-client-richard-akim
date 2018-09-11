import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import {Link} from 'react-router-dom';

export class Dashboard extends React.Component{

  render() {
    return (
      <div>
        <h3>{`Welcome back to uh-SIGN-ment ${this.props.currentUser.name}`}</h3>
        <Link to='/question'>Question</Link>
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