import {
  SEND_ORDER_FAILED,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_REQUEST,
} from "../actions/order-details";

const initialState = {
  isError: false,
  isLoading: false,
  orderNumber: 0,
};

export const orderDetailsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
