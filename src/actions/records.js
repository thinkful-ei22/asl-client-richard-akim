import { API_BASE_URL } from "../config";

export const FETCH_RECORD_REQUEST = "FETCH_RECORD_REQUEST";
export const fetchRecordRequest = () => ({
  type: FETCH_RECORD_REQUEST
});
export const FETCH_RECORD_SUCCESS = "FETCH_RECORD_SUCCESS";
export const fetchRecordSuccess = data => ({
  type: FETCH_RECORD_SUCCESS,
  data
});
export const FETCH_RECORD_ERROR = "FETCH_RECORD_ERROR";
export const fetchRecordError = error => ({
  type: FETCH_RECORD_ERROR,
  error
});

export const fetchRecord = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchRecordRequest());
  return fetch(`${API_BASE_URL}/user/progress`, {
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
      dispatch(fetchRecordSuccess(data));
    })
    .catch(err => dispatch(fetchRecordError(err)));
};