import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import questionReducer from './questions';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  question: questionReducer,
});

export default rootReducer;