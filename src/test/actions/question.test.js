/* global expect*/

import {
  FETCH_QUESTION_REQUEST,
  fetchQuestionRequest,
  FETCH_QUESTION_SUCCESS,
  fetchQuestionSuccess,
  FETCH_QUESTION_ERROR,
  fetchQuestionError,
  CORRECT_GUESS,
  correctGuess,
  WRONG_GUESS,
  wrongGuess,
  SEND_ANSWER_SUCCESS,
  sendAnswerSuccess,
  RESET_QUESTIONS_SUCCESS,
  resetQuestionsSuccess
} from '../../actions/questions';

describe('fetchQuestionRequest', () => {
  it('Should return the action', () => {
    const action = fetchQuestionRequest();
    expect(action.type).toEqual(FETCH_QUESTION_REQUEST);
  });
});
describe('fetchQuestionSuccess', () => {
  it('Should return the action', () => {
    const data = {test:'test'};
    const action = fetchQuestionSuccess(data);
    expect(action.type).toEqual(FETCH_QUESTION_SUCCESS);
    expect(action.data).toEqual(data);
  });
});
describe('fetchQuestionError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchQuestionError(error);
    expect(action.type).toEqual(FETCH_QUESTION_ERROR);
    expect(action.error).toEqual(error);
  });
});
describe('correctGuess', () => {
  it('Should return the action', () => {
    const action = correctGuess();
    expect(action.type).toEqual(CORRECT_GUESS);
  });
});
describe('wrongGuess', () => {
  it('Should return the action', () => {
    const action = wrongGuess();
    expect(action.type).toEqual(WRONG_GUESS);
  });
});
describe('sendAnswerSuccess', () => {
  it('Should return the action', () => {
    const data = {test: 'test'}
    const action = sendAnswerSuccess(data);
    expect(action.type).toEqual(SEND_ANSWER_SUCCESS);
    expect(action.payload).toEqual(data);
  });
});
describe('resetQuestionSuccess', () => {
  it('Should return the action', () => {
    const action = resetQuestionsSuccess();
    expect(action.type).toEqual(RESET_QUESTIONS_SUCCESS);
  });
});
