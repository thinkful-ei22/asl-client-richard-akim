import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import { resetQuestions } from "../../actions/questions";
import { fetchRecord } from "../../actions/records";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reset: false,
      display: null
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchRecord());
  }
  handleReset(e) {
    e.preventDefault();
    this.props.dispatch(resetQuestions());
    this.setState({ reset: false, display: "You just reset your state" });
  }
  handleResetOption(e) {
    e.preventDefault();
    this.setState({ reset: true, display: null });
  }
  handleResetCancel(e) {
    e.preventDefault();
    this.setState({ reset: false, display: null });
  }

  render() {
    let resetConfirm;
    if (this.state.reset) {
      resetConfirm = (
        <div className="fixed">
          <strong>Are you sure you want to delete all your progress?</strong>
          <div id="reset-button-container">
            <button
              onClick={e => this.handleReset(e)}
              className="question-btn red"
            >
              Yes
            </button>
            <button
              onClick={e => this.handleResetCancel(e)}
              className="question-btn"
            >
              No
            </button>
          </div>
        </div>
      );
    }
    let record;
    let improve;
    if (this.props.record) {
      record = (
        <div>
          <span>
            {`Overall Record: ${
              isNaN(
                this.props.record.correct /
                  (this.props.record.correct + this.props.record.wrong)
              )
                ? 100
                : Math.round(
                  (this.props.record.correct /
                      (this.props.record.correct + this.props.record.wrong)) *
                      100
                )
            }%`}
          </span>
        </div>
      );
      improve = this.props.record.needImprove.map((question, index) => {
        return (
          <li key={index}>
            <img
              className="improvement-img"
              src={question.imageURL}
              alt={question.imageDescription}
            />
            <div className="improvement-stat">
              {`Record for ${question.answer.toUpperCase()}: ${parseInt(
                (question.correct / (question.correct + question.incorrect)) *
                  100, 10
              )}%`}
            </div>
          </li>
        );
      });
    }
    return (
      <div>
        {resetConfirm}
        <h3>{`Welcome back to uh-SIGN-ment ${this.props.currentUser.name}`}</h3>
        <Link to="/question">
          <button className="question-btn">Question Page</button>
        </Link>
        <div>
          <p>{this.state.display}</p>
          <button
            onClick={e => this.handleResetOption(e)}
            className="question-btn"
          >
            Reset Progress
          </button>
          {record}
        </div>
        <div>
          {improve && improve.length > 0 ? (
            <h4>You need to improve on these!</h4>
          ) : null}
        </div>
        <ol id="improve-list">{improve}</ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser,
    record: state.record.record
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
