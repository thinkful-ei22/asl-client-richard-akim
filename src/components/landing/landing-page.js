import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export function LandingPage(props) {
  
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <main>
        <div>
          <img
            src="../images/landing-page-pic.jpg"
            alt="miniature brain in hand"
          />
        </div>
        <p className="ad-paragraph">
          {' '}
          Welcome to uh-SIGN-ment! A learning app designed to teach you the
          basics of American Sign Language! We've built this application with
          the best learning techniques in mind to help you retain as much
          information as possible! With each <strong>uh-SIGN-ment</strong>,
          you'll reinforce your knowledge of <strong>ASL</strong>, and be able
          to see your progress!
        </p>
        <Link to='/register'>Not a member? Register now!</Link>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    loggedIn: state.auth.currentUser !== null
  });
};

export default connect(mapStateToProps)(LandingPage);
