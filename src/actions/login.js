export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const setLoginLoadingScreen = () => ({
  type: FETCH_LOGIN_REQUEST
});
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const fetchLoginSuccess = () => ({
  type: FETCH_LOGIN_SUCCESS
});
export const FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR";
export const fetchLoginError = error => ({
  type: FETCH_LOGIN_ERROR,
  payload: error
});

export const login = credentials => dispatch => {
  dispatch(setLoginLoadingScreen());
  fetch("https://localhost:8080/api/login", {
    method: "POST",
    body: credentials.json()
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then(parsedResponse => {
      dispatch(fetchLoginSuccess());
      localStorage.setItem("authToken", parsedResponse.authToken);
    })
    .catch(err => dispatch(fetchLoginError(err)));
};
