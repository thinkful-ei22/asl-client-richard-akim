import React from 'react';
import requiresLogin from '../requires-login';
import {connect} from 'react-redux';
import {fetchQuestion} from '../../actions/questions';

export class QuestionPage extends React.Component{
  componentDidMount() {
    console.log('question page mounted');
    this.props.dispatch(fetchQuestion()); 
    
  }
  onSubmit() {
    console.log('your answer submitted');
  }
  render() {
    let loading;
    let question;
    if(!this.props.question) {
      loading = (<div>loading...</div>);
    } else {
      question = (
        <div>
          <img 
            src={this.props.question.imageURL} 
            alt={this.props.question.imageDescription}
          />
          <input type="text" />
          <button type="submit">Submit</button> 
        </div>
      );
    }
    return (
      <section>
        <div>
          Question 1
        </div>
        <div>
          {loading}
          {question}    
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return ({
    question: state.question.data
  });
};

export default requiresLogin()(connect(mapStateToProps)(QuestionPage));