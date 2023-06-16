import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";
import {
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_DISCONNECT,
  PROFILE_ORDER_GET_ORDERS,
  PROFILE_ORDER_SEND_MESSAGE,
} from "./actions/profile-orders";
import { socketMiddleware } from "./middleware/socket-middleware";
import {
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_START,
  FEED_CONNECTION_SUCCESS,
  FEED_DISCONNECT,
  FEED_GET_ORDERS,
  FEED_SEND_MESSAGE,
} from "./actions/feed";

const wsProfileOrdersActionsTypes = {
  wsInit: PROFILE_ORDER_CONNECTION_START,
  wsDisconnect: PROFILE_ORDER_DISCONNECT,
  onOpen: PROFILE_ORDER_CONNECTION_SUCCESS,
  onClose: PROFILE_ORDER_CONNECTION_CLOSED,
  onError: PROFILE_ORDER_CONNECTION_ERROR,
  onMessage: PROFILE_ORDER_GET_ORDERS,
  sendMessage: PROFILE_ORDER_SEND_MESSAGE,
};

const wsFeedActionsTypes = {
  wsInit: FEED_CONNECTION_START,
  wsDisconnect: FEED_DISCONNECT,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_ORDERS,
  sendMessage: FEED_SEND_MESSAGE,
};

const profileOrdersMiddleware = socketMiddleware(wsProfileOrdersActionsTypes);
const feedMiddleware = socketMiddleware(wsFeedActionsTypes);

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, profileOrdersMiddleware, feedMiddleware)
    )
  );

  return store;
};
