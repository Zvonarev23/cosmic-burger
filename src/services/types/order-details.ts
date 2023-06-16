import { TGetOrder } from "../../utils/types";
import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAR_ORDER_STATE,
} from "../actions/order-details";

export interface ISendOrderRequestAction {
  type: typeof SEND_ORDER_REQUEST;
}

export interface ISendOrderSuccessAction {
  type: typeof SEND_ORDER_SUCCESS;
  payload: number;
}

export interface ISendOrderFailedAction {
  type: typeof SEND_ORDER_FAILED;
}

export interface IGetOrderRequestAction {
  type: typeof GET_ORDER_REQUEST;
}

export interface IgetOrderSuccessAction {
  type: typeof GET_ORDER_SUCCESS;
  payload: TGetOrder;
}

export interface IgetOrderFailedAction {
  type: typeof GET_ORDER_FAILED;
}

export interface IClearOrderStateAction {
  type: typeof CLEAR_ORDER_STATE;
}

export type TOrderDetailsActions =
  | ISendOrderRequestAction
  | ISendOrderSuccessAction
  | ISendOrderFailedAction
  | IGetOrderRequestAction
  | IgetOrderSuccessAction
  | IgetOrderFailedAction
  | IClearOrderStateAction;
