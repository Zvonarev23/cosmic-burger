import { TWSOrdersResponse } from "../types/profile-orders";

export const FEED_CONNECTION_START = "FEED_CONNECTION_START";
export const FEED_DISCONNECT = "FEED_DISCONNECT";

export const FEED_CONNECTION_SUCCESS = "FEED_CONNECTION_SUCCESS";
export const FEED_CONNECTION_ERROR = "FEED_CONNECTION_ERROR";
export const FEED_CONNECTION_CLOSED = "FEED_CONNECTION_CLOSED";

export const FEED_GET_ORDERS = "FEED_GET_ORDERS";

export const feedWsConnectionStart = (url: string): IFeedConnectionStart => ({
  type: FEED_CONNECTION_START,
  payload: url,
});

export const feedWsConnectionClosed = (): IFeedDisconnect => ({
  type: FEED_DISCONNECT,
});

interface IFeedConnectionStart {
  type: typeof FEED_CONNECTION_START;
  payload: string;
}

interface IFeedDisconnect {
  type: typeof FEED_DISCONNECT;
}

interface IFeedConnectionSuccesAction {
  type: typeof FEED_CONNECTION_SUCCESS;
}

interface IFeedConnectionErrorAction {
  type: typeof FEED_CONNECTION_ERROR;
  payload: Event;
}

interface IFeedConnectionClosedAction {
  type: typeof FEED_CONNECTION_CLOSED;
}

interface IFeedGetOrdersAction {
  type: typeof FEED_GET_ORDERS;
  payload: TWSOrdersResponse;
}

export type TFeedsActions =
  | IFeedConnectionStart
  | IFeedDisconnect
  | IFeedConnectionSuccesAction
  | IFeedConnectionErrorAction
  | IFeedConnectionClosedAction
  | IFeedGetOrdersAction;
