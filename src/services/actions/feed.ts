import { IFeedConnectionStart, IFeedDisconnect } from "../types/feed";

export const FEED_CONNECTION_START = "FEED_CONNECTION_START";
export const FEED_DISCONNECT = "FEED_DISCONNECT";

export const FEED_CONNECTION_SUCCESS = "FEED_CONNECTION_SUCCESS";
export const FEED_CONNECTION_ERROR = "FEED_CONNECTION_ERROR";
export const FEED_CONNECTION_CLOSED = "FEED_CONNECTION_CLOSED";

export const FEED_GET_ORDERS = "FEED_GET_ORDERS";
export const FEED_SEND_MESSAGE = "FEED_SEND_MESSAGE";

export const feedWsConnectionStart = (url: string): IFeedConnectionStart => ({
  type: FEED_CONNECTION_START,
  payload: url,
});

export const feedWsConnectionClosed = (): IFeedDisconnect => ({
  type: FEED_DISCONNECT,
});
