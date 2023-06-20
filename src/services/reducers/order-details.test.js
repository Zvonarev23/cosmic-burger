import {
  CLEAR_ORDER_STATE,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  SEND_ORDER_FAILED,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
} from "../actions/order-details";
import { initialState, orderDetailsReducer } from "./order-details";

describe("test order-details reducer", () => {
  it("Should create initial state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action SEND_ORDER_REQUEST", () => {
    expect(
      orderDetailsReducer(undefined, {
        type: SEND_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("Should return state with action SEND_ORDER_SUCCESS", () => {
    const orderNumber = 23;

    expect(
      orderDetailsReducer(undefined, {
        type: SEND_ORDER_SUCCESS,
        payload: orderNumber,
      })
    ).toEqual({
      ...initialState,
      orderNumber: orderNumber,
    });
  });

  it("Should return state with action SEND_ORDER_FAILED", () => {
    expect(
      orderDetailsReducer(undefined, {
        type: SEND_ORDER_FAILED,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    });
  });

  it("Should return state with action GET_ORDER_REQUEST", () => {
    expect(
      orderDetailsReducer(undefined, {
        type: GET_ORDER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      getRequest: true,
    });
  });

  it("Should return state with action GET_ORDER_SUCCESS", () => {
    const order = {
      createdAt: "2023-06-20T10:10:04.357Z",
      ingredients: [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0943",
      ],
      name: "Space флюоресцентный бургер",
      number: 9413,
      owner: "646602fc8a4b62001c839a52",
      status: "done",
      updatedAt: "2023-06-20T10:10:04.503Z",
      __v: 0,
      _id: "64917afc8a4b62001c85f441",
    };

    expect(
      orderDetailsReducer(undefined, {
        type: GET_ORDER_SUCCESS,
        payload: order,
      })
    ).toEqual({
      ...initialState,
      getRequest: false,
      order: order,
    });
  });

  it("Should return state with action GET_ORDER_FAILED", () => {
    expect(
      orderDetailsReducer(undefined, {
        type: GET_ORDER_FAILED,
      })
    ).toEqual({
      ...initialState,
      getError: true,
      getRequest: false,
    });
  });

  it("Should return state with action CLEAR_ORDER_STATE", () => {
    expect(
      orderDetailsReducer(undefined, {
        type: CLEAR_ORDER_STATE,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
