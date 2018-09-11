import React from "react";
import { connect } from "react-redux";

class RecordDisplay extends React.Component {
  render() {
    if (this.props.currentRecord) {
      return (
        <p>{`${this.props.currentRecord.correct}/${this.props.currentRecord
          .incorrect + this.props.currentRecord.correct} correct`}</p>
      );
    }
    return <div>...LOADING...</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentRecord: state.question.record
  };
};

export default connect(mapStateToProps)(RecordDisplay);
