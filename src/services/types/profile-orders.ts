import {
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_DISCONNECT,
  PROFILE_ORDER_GET_ORDERS,
  PROFILE_ORDER_SEND_MESSAGE,
} from "../actions/profile-orders";

export type TWSOrdersResponse = {
  success: boolean;
  orders: TWSOrders[];
  total: number;
  totalToday: number;
};

export type TWSOrders = {
  ingredients: string[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
};

export interface IProfileOrderConnectionStart {
  type: typeof PROFILE_ORDER_CONNECTION_START;
  payload: string;
}

export interface IProfileOrderDisconnect {
  type: typeof PROFILE_ORDER_DISCONNECT;
}

export interface IProfileOrderConnectionSuccesAction {
  type: typeof PROFILE_ORDER_CONNECTION_SUCCESS;
}

export interface IProfileOrderConnectionErrorAction {
  type: typeof PROFILE_ORDER_CONNECTION_ERROR;
  payload: Event;
}

export interface IProfileOrderConnectionClosedAction {
  type: typeof PROFILE_ORDER_CONNECTION_CLOSED;
}

export interface IProfileOrderGetOrdersAction {
  type: typeof PROFILE_ORDER_GET_ORDERS;
  payload: TWSOrdersResponse;
}

export interface IProfileOrderSendMessageAction {
  type: typeof PROFILE_ORDER_SEND_MESSAGE;
  payload: { message: string };
}

export type TProfileOrdersActions =
  | IProfileOrderConnectionStart
  | IProfileOrderDisconnect
  | IProfileOrderConnectionSuccesAction
  | IProfileOrderConnectionErrorAction
  | IProfileOrderConnectionClosedAction
  | IProfileOrderGetOrdersAction
  | IProfileOrderSendMessageAction;
