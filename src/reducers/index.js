import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import questionReducer from "./questions";
import recordReducer from "./records";
import mobileReducer from "./mobile";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  question: questionReducer,
  record: recordReducer,
  mobile: mobileReducer
});

export default rootReducer;
