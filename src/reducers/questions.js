import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  CORRECT_GUESS,
  WRONG_GUESS,
} from '../actions/questions';

const initialState = {
  data: null,
  error: null,
  loading: false,
  correctGuess: false,
  wrongGuess: false
};

export default function questionReducer (state=initialState, action) {
  switch(action.type) {
  case FETCH_QUESTION_REQUEST: 
    return Object.assign({}, state, {
      loading:true
    });
  case FETCH_QUESTION_SUCCESS:
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null,
      correctGuess: false,
      wrongGuess: false
    });
  case FETCH_QUESTION_ERROR:
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  case CORRECT_GUESS:
    return Object.assign({}, state, {
      correctGuess: true
    });
  case WRONG_GUESS:
    return Object.assign({}, state, {
      wrongGuess: true
    });
  default: return state;
  }
}