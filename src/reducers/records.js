import {
  FETCH_RECORD_ERROR,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_REQUEST
} from '../actions/records';

const initialState = {
  record: null,
  loading: false,
  error: null
};

export default function recordReducer(state = initialState, action) {
  
  switch(action.type) {
  case FETCH_RECORD_SUCCESS:
    return {
      ...state,
      record: action.data,
      loading: false
    };
  case FETCH_RECORD_ERROR:
    return {
      ...state,
      error: action.error,
      loading: false
    };
  case FETCH_RECORD_REQUEST:
    return {
      ...state,
      loading: true,
    };
  default: return state;
  }
} 