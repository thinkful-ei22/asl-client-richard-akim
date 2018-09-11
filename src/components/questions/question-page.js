import React from 'react';
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';
import {fetchQuestion, correctGuess, wrongGuess} from '../../actions/questions';

export class QuestionPage extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchQuestion()); 
  }
  nextQuestion(e) {
    e.preventDefault();
    this.props.dispatch(fetchQuestion()); 
  }
  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    value.toLowerCase() === this.props.question.answer ? this.props.dispatch(correctGuess()):this.props.dispatch(wrongGuess());
    this.input.value = '';
    this.input.focus();
  }
  render() {
    let loading;
    let question;
    let form;
    if(!this.props.question) {
      loading = (<div>loading...</div>);
    } else {
      question = (
        <img 
          src={this.props.question.imageURL} 
          alt={this.props.question.imageDescription}
        />
      );
    }
    if (this.props.correct) {
      form = (
        <div>
          <h3>{`YOU ARE WINNAR! The answer was indeed ${this.props.question.answer.toUpperCase()}`}</h3>
          <button 
            onClick={e => this.nextQuestion(e)}
            className="question-btn"
          >
            <span>Next Question!</span>
          </button>
        </div>   
      );
    } else if (this.props.wrong) {
      form = (
        <div>
          <h3>{`Incorrect! The answer was ${this.props.question.answer.toUpperCase()}`}</h3>
          <button 
            onClick={e => this.nextQuestion(e)}
            className="question-btn"
          >
            <span>Next</span>
          </button>
        </div>   
      );
    } else {
      form = (
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input 
            type="text"
            ref={input=> (this.input = input)}
            required
            className="question-input"
          />
          <div>
            <button 
              type="submit"
              className="question-btn"
            >
              <span>Submit</span>
            </button> 
          </div>
        </form>
      );
    }
    return (
      <section>
        <div>
          <h3>WHAT'S THAT SIGN MON!</h3>
        </div>
        <div className="question-parent">
          <div className="question">
            {loading}
            {question}
          </div>
          <div className="question-response">
            {form} 
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return ({
    question: state.question.data,
    correct: state.question.correctGuess,
    wrong: state.question.wrongGuess
  });
};

export default requiresLogin()(connect(mapStateToProps)(QuestionPage));