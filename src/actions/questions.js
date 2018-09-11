import {API_BASE_URL} from '../config';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = (data) => ({
  type: FETCH_QUESTION_SUCCESS,
  data
});
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = (error) => ({
  type: FETCH_QUESTION_ERROR,
  error
});


export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  return (
    fetch(`${API_BASE_URL}/question`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject('Unable to reach server');
        }
        return res.json();
      })
      .then(data => {
        dispatch(fetchQuestionSuccess(data));
      })
      .catch(err => dispatch(fetchQuestionError(err)))
  );
};

