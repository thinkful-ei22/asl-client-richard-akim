import {
  FETCH_QUESTION_ERROR,
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS
} from '../actions/questions';

const initialState = {
  data: null,
  error: null,
  loading: false
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
      error: null
    });
  case FETCH_QUESTION_ERROR:
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  default: return state;
  }
}