import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILED,
  SET_AUTH_CHECKED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  SET_USER,
} from "../actions/user";

const initialState = {
  isAuthChecked: false,

  user: null,

  signUpError: null,
  signUpRequest: false,

  signInError: null,
  signInRequest: false,

  getUserError: null,
  getUserRequest: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case SIGN_UP_FAILED: {
      return {
        ...state,
        signUpError: action.payload,
        signUpRequest: false,
      };
    }

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

    case SIGN_IN_FAILED: {
      return {
        ...state,
        signInError: action.payload,
        signInRequest: false,
      };
    }

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

    case GET_USER_FAILED: {
      return {
        ...state,
        getUserError: action.payload,
        getUserRequest: false,
      };
    }

    case SET_AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    }

    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
