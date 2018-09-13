import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import questionReducer from './questions';
import recordReducer from './records';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  question: questionReducer,
  record: recordReducer,
});

export default rootReducer;