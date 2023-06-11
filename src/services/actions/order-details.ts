import { getOrder, sendOrder } from "../../utils/request-to-api";
import { TOrder } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";
import { IClearOrderStateAction } from "../types/order-details";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const CLEAR_ORDER_STATE = "CLEAR_ORDER_STATE";

export const clearOrderState = (): IClearOrderStateAction => ({
  type: CLEAR_ORDER_STATE,
});

export const sendOrderRequest =
  (order: TOrder): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: SEND_ORDER_REQUEST,
    });

    return sendOrder(order)
      .then((res) => {
        dispatch({
          type: SEND_ORDER_SUCCESS,
          payload: res.order.number,
        });
      })
      .catch(() => {
        dispatch({
          type: SEND_ORDER_FAILED,
        });
      });
  };

export const getOrderRequest =
  (number: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    return getOrder(number)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.orders[0],
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
