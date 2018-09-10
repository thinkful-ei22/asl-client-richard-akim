import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';

export class Dashboard extends React.Component{

  render() {
    return (
      <div>
        Place holder testing for now
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));