import {
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
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

export type TOrderDetailsActions =
  | ISendOrderRequestAction
  | ISendOrderSuccessAction
  | ISendOrderFailedAction;
