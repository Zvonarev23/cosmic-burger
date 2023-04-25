import { sendOrder } from "../../utils/request-to-api";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";

export const orderRequest = (order) => (dispatch) => {
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
