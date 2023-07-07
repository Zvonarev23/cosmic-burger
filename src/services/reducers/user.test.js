import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SET_AUTH_CHECKED,
  SET_USER,
  SIGN_IN_FAILED,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../actions/user";
import { initialState, userReducer } from "./user";

describe("test user reducer", () => {
  it("Should create initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action SIGN_UP_REQUEST", () => {
    expect(userReducer(undefined, { type: SIGN_UP_REQUEST })).toEqual({
      ...initialState,
      signUpRequest: true,
    });
  });

  it("Should return state with action SIGN_UP_SUCCESS", () => {
    const user = {
      name: "Иван",
      email: "test@mail.ru",
    };
    expect(
      userReducer(undefined, { type: SIGN_UP_SUCCESS, payload: user })
    ).toEqual({
      ...initialState,
      signUpRequest: false,
      user: user,
    });
  });

  it("Should return state with action SIGN_UP_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, { type: SIGN_UP_FAILED, payload: errorMessage })
    ).toEqual({
      ...initialState,
      signUpRequest: false,
      signUpError: errorMessage,
    });
  });

  it("Should return state with action SIGN_IN_REQUEST", () => {
    expect(userReducer(undefined, { type: SIGN_IN_REQUEST })).toEqual({
      ...initialState,
      signInRequest: true,
    });
  });

  it("Should return state with action SIGN_IN_SUCCESS", () => {
    const user = {
      name: "Иван",
      email: "test@mail.ru",
    };

    expect(
      userReducer(undefined, { type: SIGN_IN_SUCCESS, payload: user })
    ).toEqual({
      ...initialState,
      signInRequest: false,
      user: user,
    });
  });

  it("Should return state with action SIGN_IN_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, { type: SIGN_IN_FAILED, payload: errorMessage })
    ).toEqual({
      ...initialState,
      signInRequest: false,
      signInError: errorMessage,
    });
  });

  it("Should return state with action SIGN_OUT_REQUEST", () => {
    expect(userReducer(undefined, { type: SIGN_OUT_REQUEST })).toEqual({
      ...initialState,
      signOutRequest: true,
    });
  });

  it("Should return state with action SIGN_OUT_SUCCESS", () => {
    expect(userReducer(undefined, { type: SIGN_OUT_SUCCESS })).toEqual({
      ...initialState,
      signOutRequest: false,
      user: null,
    });
  });

  it("Should return state with action SIGN_OUT_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, { type: SIGN_OUT_FAILED, payload: errorMessage })
    ).toEqual({
      ...initialState,
      signOutRequest: false,
      signOutError: errorMessage,
    });
  });

  it("Should return state with action GET_USER_REQUEST", () => {
    expect(userReducer(undefined, { type: GET_USER_REQUEST })).toEqual({
      ...initialState,
      getUserRequest: true,
    });
  });

  it("Should return state with action GET_USER_SUCCESS", () => {
    const user = {
      name: "Иван",
      email: "test@mail.ru",
    };

    expect(
      userReducer(undefined, { type: GET_USER_SUCCESS, payload: user })
    ).toEqual({
      ...initialState,
      getUserRequest: false,
      user: user,
    });
  });

  it("Should return state with action GET_USER_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, { type: GET_USER_FAILED, payload: errorMessage })
    ).toEqual({
      ...initialState,
      getUserRequest: false,
      getUserError: errorMessage,
    });
  });

  it("Should return state with action UPDATE_USER_REQUEST", () => {
    expect(userReducer(undefined, { type: UPDATE_USER_REQUEST })).toEqual({
      ...initialState,
      updateUserRequest: true,
    });
  });

  it("Should return state with action UPDATE_USER_SUCCESS", () => {
    const user = {
      name: "Иван",
      email: "test@mail.ru",
    };

    expect(
      userReducer(undefined, { type: UPDATE_USER_SUCCESS, payload: user })
    ).toEqual({
      ...initialState,
      updateUserRequest: false,
      user: user,
    });
  });

  it("Should return state with action UPDATE_USER_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, {
        type: UPDATE_USER_FAILED,
        payload: errorMessage,
      })
    ).toEqual({
      ...initialState,
      updateUserRequest: false,
      updateUserError: errorMessage,
    });
  });

  it("Should return state with action FORGOT_PASSWORD_REQUEST", () => {
    expect(userReducer(undefined, { type: FORGOT_PASSWORD_REQUEST })).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
    });
  });

  it("Should return state with action FORGOT_PASSWORD_SUCCESS", () => {
    expect(userReducer(undefined, { type: FORGOT_PASSWORD_SUCCESS })).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
    });
  });

  it("Should return state with action FORGOT_PASSWORD_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, {
        type: FORGOT_PASSWORD_FAILED,
        payload: errorMessage,
      })
    ).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordError: errorMessage,
    });
  });

  it("Should return state with action RESET_PASSWORD_REQUEST", () => {
    expect(userReducer(undefined, { type: RESET_PASSWORD_REQUEST })).toEqual({
      ...initialState,
      resetPasswordRequest: true,
    });
  });

  it("Should return state with action RESET_PASSWORD_SUCCESS", () => {
    expect(userReducer(undefined, { type: RESET_PASSWORD_SUCCESS })).toEqual({
      ...initialState,
      resetPasswordRequest: false,
    });
  });

  it("Should return state with action RESET_PASSWORD_FAILED", () => {
    const errorMessage = "Ошибка соединения";

    expect(
      userReducer(undefined, {
        type: RESET_PASSWORD_FAILED,
        payload: errorMessage,
      })
    ).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordError: errorMessage,
    });
  });

  it("Should return state with action SET_AUTH_CHECKED", () => {
    expect(
      userReducer(undefined, { type: SET_AUTH_CHECKED, payload: true })
    ).toEqual({
      ...initialState,
      isAuthChecked: true,
    });
  });

  it("Should return state with action SET_USER", () => {
    const user = {
      name: "Иван",
      email: "test@mail.ru",
    };

    expect(userReducer(undefined, { type: SET_USER, payload: user })).toEqual({
      ...initialState,
      user: user,
    });
  });
});
