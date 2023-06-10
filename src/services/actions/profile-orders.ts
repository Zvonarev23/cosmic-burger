import { TWSOrdersResponse } from "../types/profile-orders";

export const PROFILE_ORDER_CONNECTION_START = "PROFILE_ORDER_CONNECTION_START";
export const PROFILE_ORDER_DISCONNECT = "PROFILE_ORDER_DISCONNECT";

export const PROFILE_ORDER_CONNECTION_SUCCESS =
  "PROFILE_ORDER_CONNECTION_SUCCESS";
export const PROFILE_ORDER_CONNECTION_ERROR = "PROFILE_ORDER_CONNECTION_ERROR";
export const PROFILE_ORDER_CONNECTION_CLOSED =
  "PROFILE_ORDER_CONNECTION_CLOSED";

export const PROFILE_ORDER_GET_ORDERS = "PROFILE_ORDER_GET_ORDERS";

export const profileOrdersWsConnectionStart = (
  url: string
): IProfileOrderConnectionStart => ({
  type: PROFILE_ORDER_CONNECTION_START,
  payload: url,
});

export const profileOrdersWsConnectionClosed = (): IProfileOrderDisconnect => ({
  type: PROFILE_ORDER_DISCONNECT,
});

interface IProfileOrderConnectionStart {
  type: typeof PROFILE_ORDER_CONNECTION_START;
  payload: string;
}

interface IProfileOrderDisconnect {
  type: typeof PROFILE_ORDER_DISCONNECT;
}

interface IProfileOrderConnectionSuccesAction {
  type: typeof PROFILE_ORDER_CONNECTION_SUCCESS;
}

interface IProfileOrderConnectionErrorAction {
  type: typeof PROFILE_ORDER_CONNECTION_ERROR;
  payload: Event;
}

interface IProfileOrderConnectionClosedAction {
  type: typeof PROFILE_ORDER_CONNECTION_CLOSED;
}

interface IProfileOrderGetOrdersAction {
  type: typeof PROFILE_ORDER_GET_ORDERS;
  payload: TWSOrdersResponse;
}

export type TProfileOrdersActions =
  | IProfileOrderConnectionStart
  | IProfileOrderDisconnect
  | IProfileOrderConnectionSuccesAction
  | IProfileOrderConnectionErrorAction
  | IProfileOrderConnectionClosedAction
  | IProfileOrderGetOrdersAction;
