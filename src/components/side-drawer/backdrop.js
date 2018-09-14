import React from "react";
import { connect } from "react-redux";
import { toggleHamburgerMenu } from "../../actions/mobile";

class Backdrop extends React.Component {
  render() {
    return (
      <div
        className="backdrop"
        onClick={() => {
          this.props.dispatch(toggleHamburgerMenu());
        }}
      />
    );
  }
}

export default connect()(Backdrop);
