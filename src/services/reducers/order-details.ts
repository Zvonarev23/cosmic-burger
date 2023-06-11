import { TGetOrder } from "../../utils/types";
import {
  SEND_ORDER_FAILED,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_REQUEST,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  GET_ORDER_REQUEST,
  CLEAR_ORDER_STATE,
} from "../actions/order-details";
import { TOrderDetailsActions } from "../types/order-details";

type TOrderDetailsState = {
  isError: boolean;
  isLoading: boolean;

  getError: boolean;
  getRequest: boolean;

  order: null | TGetOrder;
  orderNumber: number;
};

const initialState: TOrderDetailsState = {
  isError: false,
  isLoading: false,

  getError: false,
  getRequest: false,

  order: null,
  orderNumber: 0,
};

export const orderDetailsReducer = (
  state = initialState,
  action: TOrderDetailsActions
): TOrderDetailsState => {
  switch (action.type) {
    case SEND_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderNumber: action.payload,
      };
    case SEND_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_ORDER_REQUEST:
      return {
        ...state,
        getRequest: true,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        getRequest: false,
        order: action.payload,
      };
    case GET_ORDER_FAILED:
      return {
        ...state,
        getError: true,
        getRequest: false,
      };

    case CLEAR_ORDER_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
