/* global expect*/

import questionReducer from '../../reducers/questions';
import { 
  fetchQuestionSuccess,
  sendAnswerSuccess,
} from '../../actions/questions';

describe('questionReducer', () => {
  it('Should set the inital state when nothing is passed in', () =>{
    const initalState = {
      data: null,
      error: null,
      loading: false,
      correctGuess: false,
      wrongGuess: false,
    };

    const state = questionReducer(undefined, {type: '@@UNKNOWN'});
    expect(state).toEqual(initalState);
  });

  it('Should handle fetchQuestion action', () => {
    const testData = {foo:'bar'};
    const oldState = {
      data: null,
    };
    const newState = {
      data: testData,
    };

    const state = questionReducer(oldState, fetchQuestionSuccess(testData));
    expect(state.data).toEqual(newState.data);
  });

  it('Should handle sendAnswer action', () => {
    const testData = {foo:'bar'};
    const oldState = {
      data: null,
    };
    const newState = {
      data: testData,
    };

    const state = questionReducer(oldState, sendAnswerSuccess(testData));
    expect(state.data).toEqual(newState.data);
  });

  
});