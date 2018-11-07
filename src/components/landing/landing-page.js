import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <main>
        <div>
          <img
            id="asl-love-img"
            src="https://blog.umhb.edu/wp-content/uploads/2017/03/asl-love.jpg"
            alt="asl for love"
          />
        </div>
        <p className="ad-paragraph">
          Welcome to uh-SIGN-ment! A learning app designed to teach you the
          basics of American Sign Language! We've built this application with
          the best learning techniques in mind to help you retain as much
          information as possible! With each <strong>uh-SIGN-ment</strong>,
          you'll reinforce your knowledge of <strong>ASL</strong>, and be able
          to see your progress!
        </p>
        <p>Not a member?</p>
        <Link to="/register">
          Register now!
        </Link>
        <p><u>Demo Account:</u></p>
        <p><strong>Username:</strong> testuser</p>
        <p><strong>Password:</strong> helloworld</p>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LandingPage);
