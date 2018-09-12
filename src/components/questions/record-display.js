import React from "react";
import { connect } from "react-redux";

class RecordDisplay extends React.Component {
  render() {
    console.log(this.props.currentRecord);
    if (this.props.currentRecord) {
      return (
        <p>{`Got this one correct ${
          this.props.currentRecord.correct
        } out of ${this.props.currentRecord.incorrect +
          this.props.currentRecord.correct} times`}</p>
      );
    }
    return <div>...LOADING...</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentRecord: state.question.data
  };
};

export default connect(mapStateToProps)(RecordDisplay);
