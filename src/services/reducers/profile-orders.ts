import {
  TProfileOrdersActions,
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_GET_ORDERS,
} from "../actions/profile-orders";
import { TWSOrders } from "../types/profile-orders";

type TProfileOrdersState = {
  wsConnected: boolean;
  orders: TWSOrders[];
  total: number;
  totalToday: number;

  error?: Event;
};

const initialState: TProfileOrdersState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
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
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
