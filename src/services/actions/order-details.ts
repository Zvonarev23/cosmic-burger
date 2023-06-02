import { sendOrder } from "../../utils/request-to-api";
import { TOrder } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export const orderRequest =
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
