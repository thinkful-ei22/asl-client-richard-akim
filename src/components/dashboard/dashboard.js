import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import {Link} from 'react-router-dom';
import { resetQuestions } from '../../actions/questions';

export class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      reset: false,
      display: null
    };
  }
  handleReset(e) {
    e.preventDefault();
    this.props.dispatch(resetQuestions());
    this.setState({reset:false, display: 'You just reset your state'});
  }
  handleResetOption(e) {
    e.preventDefault();
    this.setState({reset:true, display:null});
  }
  handleResetCancel(e){
    e.preventDefault();
    this.setState({reset:false, display:null});
  }

  render() {
    let resetConfirm;
    if(this.state.reset) {
      resetConfirm = (
        <div className="fixed">
          <span>
            Are you sure you want to delete all your progress?
          </span>
          <div>
            <button onClick={(e) => this.handleReset(e)} className="question-btn red">Yes</button>
            <button onClick={(e) => this.handleResetCancel(e)} className="question-btn">No</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        {resetConfirm}
        <h3>{`Welcome back to uh-SIGN-ment ${this.props.currentUser.name}`}</h3>
        <Link to='/question'><button className="question-btn">Question Page</button></Link>
        <div>
          <p>{this.state.display}</p>
          <button onClick={(e) => this.handleResetOption(e)} className="question-btn">Reset Progress</button>
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