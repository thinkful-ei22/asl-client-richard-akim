import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR
} from "../actions/login";

const initialState = {
  user: null,
  errorMessage: "",
  loading: false
};

export function loginReducer(state = initialState, action) {
  if (action.type === FETCH_LOGIN_REQUEST) {
    return { ...state, loading: true };
  }

  if (action.type === FETCH_LOGIN_SUCCESS) {
    return { ...state, loading: false };
  }

  if (action.type === FETCH_LOGIN_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
}
