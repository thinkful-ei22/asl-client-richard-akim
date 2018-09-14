import React from "react";
import { connect } from "react-redux";
import { toggleHamburgerMenu } from "../../actions/mobile";

import "./hamburger-button.css";

class HamburgerButton extends React.Component {
  render() {
    return (
      <button
        className="hamburger"
        onClick={() => {
          this.props.toggleHamburgerMenu();
        }}
      >
        <div className="hamburger-patty" />
        <div className="hamburger-patty" />
        <div className="hamburger-patty" />
      </button>
    );
  }
}

export default connect(
  null,
  { toggleHamburgerMenu }
)(HamburgerButton);
