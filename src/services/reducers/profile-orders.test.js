import {
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_DISCONNECT,
  PROFILE_ORDER_GET_ORDERS,
} from "../actions/profile-orders";
import { profileOrdersReducer, initialState } from "./profile-orders";

describe("test profile-orders reducer", () => {
  it("Should return initial state", () => {
    expect(profileOrdersReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action PROFILE_ORDER_CONNECTION_START", () => {
    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_CONNECTION_START,
      })
    ).toEqual(initialState);
  });

  it("Should return state with action PROFILE_ORDER_DISCONNECT", () => {
    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_DISCONNECT,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("Should return state with action PROFILE_ORDER_CONNECTION_SUCCESS", () => {
    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("Should return state with action PROFILE_ORDER_CONNECTION_ERROR", () => {
    const errorMessage =
      "WebSocket is closed before the connection is established.";

    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_CONNECTION_ERROR,
        payload: errorMessage,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
      error: errorMessage,
    });
  });

  it("Should return state with action PROFILE_ORDER_CONNECTION_CLOSED", () => {
    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("Should return state with action PROFILE_ORDER_GET_ORDERS", () => {
    const data = {
      orders: [
        {
          createdAt: "2023-06-20T08:59:47.419Z",
          ingredients: [
            "643d69a5c3f7b9001cfa093c",
            "643d69a5c3f7b9001cfa0943",
            "643d69a5c3f7b9001cfa093c",
          ],
          name: "Space краторный бургер",
          number: 9408,
          status: "done",
          updatedAt: "2023-06-20T08:59:47.518Z",
          _id: "64916a838a4b62001c85f40b",
        },
      ],
    };

    expect(
      profileOrdersReducer(undefined, {
        type: PROFILE_ORDER_GET_ORDERS,
        payload: data,
      })
    ).toEqual({
      ...initialState,
      orders: data.orders,
    });
  });
});
