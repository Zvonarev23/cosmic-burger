import { signIn, signUp } from "../../utils/request-to-api";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const setAuthChecked = (payload) => ({
  type: SET_AUTH_CHECKED,
  payload,
});

export const requestSignUp = (form) => (dispatch) => {
  dispatch({
    type: SIGN_UP_REQUEST,
  });

  return signUp(form)
    .then((res) => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.user,
      });
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => {
      dispatch({
        type: SIGN_UP_FAILED,
        payload: error,
      });
    });
};

export const requestSignIn = (form) => (dispatch) => {
  dispatch({
    type: SIGN_IN_REQUEST,
  });

  return signIn(form)
    .then((res) => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: res.user,
      });
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => {
      dispatch({
        type: SIGN_IN_FAILED,
        payload: error,
      });
    });
};
