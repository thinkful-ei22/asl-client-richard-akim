import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import rootReducer from './reducers';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;