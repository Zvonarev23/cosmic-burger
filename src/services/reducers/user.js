import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_REQUEST,
  SIGN_OUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_AUTH_CHECKED,
  SET_USER,
} from "../actions/user";

const initialState = {
  isAuthChecked: false,

  user: null,

  signUpError: null,
  signUpRequest: false,

  signInError: null,
  signInRequest: false,

  signOutError: null,
  signOutRequest: false,

  getUserError: null,
  getUserRequest: false,

  updateUserError: null,
  updateUserRequest: false,

  forgotPasswordError: null,
  forgotPasswordRequest: false,

  resetPasswordError: null,
  resetPasswordRequest: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // регистрация

    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpRequest: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpRequest: false,
        user: action.payload,
      };

    case SIGN_UP_FAILED:
      return {
        ...state,
        signUpError: action.payload,
        signUpRequest: false,
      };

    // авторизация

    case SIGN_IN_REQUEST:
      return {
        ...state,
        signInRequest: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signInRequest: false,
        user: action.payload,
      };

    case SIGN_IN_FAILED:
      return {
        ...state,
        signInError: action.payload,
        signInRequest: false,
      };

    // выход из системы

    case SIGN_OUT_REQUEST:
      return {
        ...state,
        signOutRequest: true,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        signOutRequest: false,
        user: null,
      };

    case SIGN_OUT_FAILED:
      return {
        ...state,
        signOutError: action.payload,
        signOutRequest: false,
      };

    // получить данные пользователя

    case GET_USER_REQUEST:
      return {
        ...state,
        getUserRequest: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        getUserRequest: false,
        user: action.payload,
      };

    case GET_USER_FAILED:
      return {
        ...state,
        getUserError: action.payload,
        getUserRequest: false,
      };

    // изменить данные пользователя

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        updateUserRequest: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUserRequest: false,
        user: action.payload,
      };

    case UPDATE_USER_FAILED:
      return {
        ...state,
        updateUserError: action.payload,
        updateUserRequest: false,
      };

    // запрос на восстановление пароля

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPasswordRequest: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordRequest: false,
      };

    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        forgotPasswordError: action.payload,
        forgotPasswordRequest: false,
      };

    // смена пароля

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordRequest: true,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordRequest: false,
      };

    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordError: action.payload,
        resetPasswordRequest: false,
      };

    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
