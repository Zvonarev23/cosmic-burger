import { TUseForm } from "../../hooks/useForm";
import {
  forgotPassword,
  getUser,
  resetPassword,
  signIn,
  signOut,
  signUp,
  updateUser,
} from "../../utils/request-to-api";
import { AppDispatch, AppThunk } from "../types";
import { ISetAuthChecked, ISetUser } from "../types/user";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";

export const SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILED = "SIGN_OUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const SET_USER = "SET_USER";

export const setUser = (payload: null): ISetUser => ({
  type: SET_USER,
  payload,
});

export const setAuthChecked = (payload: boolean): ISetAuthChecked => ({
  type: SET_AUTH_CHECKED,
  payload,
});

export const requestSignUp =
  (form: TUseForm): AppThunk =>
  (dispatch: AppDispatch) => {
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

export const requestSignIn =
  (form: TUseForm): AppThunk =>
  (dispatch: AppDispatch) => {
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

export const requestSignOut = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: SIGN_OUT_REQUEST,
  });

  return signOut()
    .then(() => {
      dispatch({
        type: SIGN_OUT_SUCCESS,
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    })
    .catch((error) => {
      dispatch({
        type: SIGN_IN_FAILED,
        payload: error,
      });
    });
};

export const requestGetUser =
  (): AppThunk<Promise<void>> => (dispatch: AppDispatch) => {
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
      });
  };

export const requestUpdateUser =
  (form: TUseForm): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    return updateUser(form)
      .then((res) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: res.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAILED,
          payload: error,
        });
      });
  };

export const requestForgotPassword =
  (email: string): AppThunk<Promise<void>> =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    return forgotPassword(email)
      .then(() => dispatch({ type: FORGOT_PASSWORD_SUCCESS }))
      .catch((error) =>
        dispatch({ type: FORGOT_PASSWORD_FAILED, payload: error })
      );
  };

export const requestResetPassword =
  ({ password, token }: TUseForm): AppThunk<Promise<void>> =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });

    return resetPassword({ password, token })
      .then(() => dispatch({ type: RESET_PASSWORD_SUCCESS }))
      .catch((error) =>
        dispatch({ type: RESET_PASSWORD_FAILED, payload: error })
      );
  };

export const checkUserAuth =
  (): AppThunk => (dispatch: AppDispatch<Promise<void>>) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(requestGetUser())
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => {
          dispatch(setAuthChecked(true));
        });
    } else {
      dispatch(setAuthChecked(true));
    }
  };
