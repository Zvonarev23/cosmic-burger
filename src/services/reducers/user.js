import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILED,
  SET_AUTH_CHECKED,
} from "../actions/user";

const initialState = {
  isAuthChecked: false,

  user: null,

  signUpError: null,
  signUpRequest: false,

  signInError: null,
  signInRequest: false,
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

    case SET_AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    }

    default:
      return state;
  }
};
