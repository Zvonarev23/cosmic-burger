import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";
import {
  PROFILE_ORDER_CONNECTION_CLOSED,
  PROFILE_ORDER_CONNECTION_ERROR,
  PROFILE_ORDER_CONNECTION_START,
  PROFILE_ORDER_CONNECTION_SUCCESS,
  PROFILE_ORDER_GET_ORDERS,
} from "./actions/profile-orders";
import { socketMiddleware } from "./middleware/socket-middleware";

const wsProfileOrdersActionsTypes = {
  wsInit: PROFILE_ORDER_CONNECTION_START,
  onOpen: PROFILE_ORDER_CONNECTION_SUCCESS,
  onClose: PROFILE_ORDER_CONNECTION_CLOSED,
  onError: PROFILE_ORDER_CONNECTION_ERROR,
  onMessage: PROFILE_ORDER_GET_ORDERS,
};

const profileOrdersMiddleware = socketMiddleware(wsProfileOrdersActionsTypes);

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, profileOrdersMiddleware)
    )
  );

  return store;
};
