import {
  FEED_CONNECTION_START,
  FEED_DISCONNECT,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_ORDERS,
} from "../actions/feed";
import { TFeedsActions } from "../types/feed";
import { TWSOrders } from "../types/profile-orders";

type TFeedState = {
  wsConnected: boolean;

  orders: TWSOrders[];
  total: number;
  totalToday: number;

  error?: Event;
};

const initialState: TFeedState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const feedReducer = (
  state = initialState,
  action: TFeedsActions
): TFeedState => {
  switch (action.type) {
    case FEED_CONNECTION_START:
      return {
        ...state,
      };

    case FEED_DISCONNECT:
      return {
        ...state,
        wsConnected: false,
      };

    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };

    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case FEED_GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
