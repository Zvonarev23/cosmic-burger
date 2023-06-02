import { TUser } from "../../utils/types";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
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

export interface ISetUser {
  type: typeof SET_USER;
  payload: null;
}

export interface ISetAuthChecked {
  type: typeof SET_AUTH_CHECKED;
  payload: boolean;
}

export interface ISignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
}

export interface ISignUpRequestSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: Pick<TUser, "name" | "email">;
}

export interface ISignUpRequestFailedAction {
  type: typeof SIGN_UP_FAILED;
  payload: Error;
}

export interface ISignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
}

export interface ISignInRequestSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: Pick<TUser, "name" | "email">;
}

export interface ISignInRequestFailedAction {
  type: typeof SIGN_IN_FAILED;
  payload: Error;
}

export interface ISignOutRequestAction {
  type: typeof SIGN_OUT_REQUEST;
}

export interface ISignOutRequestSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface ISignOutRequestFailedAction {
  type: typeof SIGN_OUT_FAILED;
  payload: Error;
}

export interface IGetUserRequestAction {
  type: typeof GET_USER_REQUEST;
}

export interface IGetUserRequestSuccessAction {
  type: typeof GET_USER_SUCCESS;
  payload: Pick<TUser, "name" | "email">;
}

export interface IGetUserRequestFailedAction {
  type: typeof GET_USER_FAILED;
  payload: Error;
}

export interface IUpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserRequestSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  payload: Pick<TUser, "name" | "email">;
}

export interface IUpdateUserRequestFailedAction {
  type: typeof UPDATE_USER_FAILED;
  payload: Error;
}

export interface IForgotPasswordRequestAction {
  type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordRequestSuccessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordRequestFailedAction {
  type: typeof FORGOT_PASSWORD_FAILED;
  payload: Error;
}

export interface IResetPasswordRequestAction {
  type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordRequestSuccessAction {
  type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordRequestFailedAction {
  type: typeof RESET_PASSWORD_FAILED;
  payload: Error;
}

export type TUserActions =
  | ISetUser
  | ISetAuthChecked
  | ISignUpRequestAction
  | ISignUpRequestSuccessAction
  | ISignUpRequestFailedAction
  | ISignInRequestAction
  | ISignInRequestSuccessAction
  | ISignInRequestFailedAction
  | ISignOutRequestAction
  | ISignOutRequestSuccessAction
  | ISignOutRequestFailedAction
  | IGetUserRequestAction
  | IGetUserRequestSuccessAction
  | IGetUserRequestFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserRequestSuccessAction
  | IUpdateUserRequestFailedAction
  | IForgotPasswordRequestAction
  | IForgotPasswordRequestSuccessAction
  | IForgotPasswordRequestFailedAction
  | IResetPasswordRequestAction
  | IResetPasswordRequestSuccessAction
  | IResetPasswordRequestFailedAction;
