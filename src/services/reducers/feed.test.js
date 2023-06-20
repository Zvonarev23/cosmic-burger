import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_START,
  FEED_CONNECTION_SUCCESS,
  FEED_DISCONNECT,
  FEED_GET_ORDERS,
} from "../actions/feed";
import { feedReducer, initialState } from "./feed";

describe("test feed reducer", () => {
  it("Should return initial state", () => {
    expect(feedReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action FEED_CONNECTION_START", () => {
    expect(
      feedReducer(undefined, {
        type: FEED_CONNECTION_START,
      })
    ).toEqual(initialState);
  });

  it("Should return state with action FEED_DISCONNECT", () => {
    expect(
      feedReducer(undefined, {
        type: FEED_DISCONNECT,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("Should return state with action FEED_CONNECTION_SUCCESS", () => {
    expect(
      feedReducer(undefined, {
        type: FEED_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("Should return state with action FEED_CONNECTION_ERROR", () => {
    const errorMessage =
      "WebSocket is closed before the connection is established.";

    expect(
      feedReducer(undefined, {
        type: FEED_CONNECTION_ERROR,
        payload: errorMessage,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
      error: errorMessage,
    });
  });

  it("Should return state with action FEED_CONNECTION_CLOSED", () => {
    expect(
      feedReducer(undefined, {
        type: FEED_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("Should return state with action FEED_GET_ORDERS", () => {
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
      total: 45,
      totalToday: 15,
    };

    expect(
      feedReducer(undefined, {
        type: FEED_GET_ORDERS,
        payload: data,
      })
    ).toEqual({
      ...initialState,
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
    });
  });
});
