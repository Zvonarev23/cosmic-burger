import { getUser, signIn, signUp } from "../../utils/request-to-api";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const SET_USER = "SET_USER";

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

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

export const requestGetUser = () => (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });

  return getUser()
    .then((res) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.user,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_FAILED,
        payload: error,
      });
      console.log(error);
    });
};

export const checkUserAuth = () => (dispatch) => {
  if (localStorage.getItem("accessToken")) {
    dispatch(requestGetUser())
      .catch((error) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
        console.log(error);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  } else {
    dispatch(setAuthChecked(true));
  }
};
