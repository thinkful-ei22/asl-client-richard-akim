import { API_BASE_URL } from "../config";
import { fetchRecord } from "./records";

export const FETCH_QUESTION_REQUEST = "FETCH_QUESTION_REQUEST";
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});
export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const fetchQuestionSuccess = data => ({
  type: FETCH_QUESTION_SUCCESS,
  data
});
export const FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR";
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const CORRECT_GUESS = "CORRECT_GUESS";
export const correctGuess = () => ({
  type: CORRECT_GUESS
});

export const WRONG_GUESS = "WRONG_GUESS";
export const wrongGuess = () => ({
  type: WRONG_GUESS
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/question`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject("Unable to reach server");
      }
      return res.json();
    })
    .then(data => {
      dispatch(fetchQuestionSuccess(data));
    })
    .catch(err => dispatch(fetchQuestionError(err)));
};

export const SEND_ANSWER_SUCCESS = "SEND_ANSWER_SUCCESS";
export const sendAnswerSuccess = stats => ({
  type: SEND_ANSWER_SUCCESS,
  payload: stats
});

export const sendAnswer = stats => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const { correct } = stats;
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/question`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(stats)
  })
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .then(parsedResponse => {
      dispatch(sendAnswerSuccess(parsedResponse));
    })
    .then(() => (correct ? dispatch(correctGuess()) : dispatch(wrongGuess())))
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
};

export const RESET_QUESTIONS_SUCCESS = "RESET_QUESTIONS_SUCCESS";
export const resetQuestionsSuccess = () => ({
  type: RESET_QUESTIONS_SUCCESS,
});

export const resetQuestions = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  return fetch(`${API_BASE_URL}/question/reset`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => {
      dispatch(fetchRecord());
    })
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
  
};