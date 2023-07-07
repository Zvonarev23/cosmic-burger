import {
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_GET_ORDERS,
  PROFILE_ORDER_DISCONNECT,
} from "../actions/profile-orders";
import { TProfileOrdersActions, TWSOrders } from "../types/profile-orders";

type TProfileOrdersState = {
  wsConnected: boolean;
  orders: TWSOrders[];
  error?: Event;
};

export const initialState: TProfileOrdersState = {
  wsConnected: false,
  orders: [],
};

export const profileOrdersReducer = (
  state = initialState,
  action: TProfileOrdersActions
): TProfileOrdersState => {
  switch (action.type) {
    case PROFILE_ORDER_CONNECTION_START:
      return {
        ...state,
      };

    case PROFILE_ORDER_DISCONNECT:
      return {
        ...state,
        wsConnected: false,
      };

    case PROFILE_ORDER_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case PROFILE_ORDER_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      };

    case PROFILE_ORDER_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case PROFILE_ORDER_GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      };

    default:
      return state;
  }
};
