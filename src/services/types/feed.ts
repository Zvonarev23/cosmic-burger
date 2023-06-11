import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_START,
  FEED_CONNECTION_SUCCESS,
  FEED_DISCONNECT,
  FEED_GET_ORDERS,
  FEED_SEND_MESSAGE,
} from "../actions/feed";
import { TWSOrdersResponse } from "./profile-orders";

export interface IFeedConnectionStart {
  type: typeof FEED_CONNECTION_START;
  payload: string;
}

export interface IFeedDisconnect {
  type: typeof FEED_DISCONNECT;
}

export interface IFeedConnectionSuccesAction {
  type: typeof FEED_CONNECTION_SUCCESS;
}

export interface IFeedConnectionErrorAction {
  type: typeof FEED_CONNECTION_ERROR;
  payload: Event;
}

export interface IFeedConnectionClosedAction {
  type: typeof FEED_CONNECTION_CLOSED;
}

export interface IFeedGetOrdersAction {
  type: typeof FEED_GET_ORDERS;
  payload: TWSOrdersResponse;
}

export interface IFeedSendMessageAction {
  type: typeof FEED_SEND_MESSAGE;
  payload: { message: string };
}

export type TFeedsActions =
  | IFeedConnectionStart
  | IFeedDisconnect
  | IFeedConnectionSuccesAction
  | IFeedConnectionErrorAction
  | IFeedConnectionClosedAction
  | IFeedGetOrdersAction
  | IFeedSendMessageAction;
